import { NextRequest, NextResponse } from 'next/server';
import { getTrustedDrugImageCandidate } from '@/data/drugImageCatalog';

import { requireActiveApiUser } from '@/lib/auth/require-active-api-user';

type StaticTrustedImage = {
  imageUrl: string;
  sourceName: string;
  sourceUrl: string;
  labelTitle: string;
  licenseNote?: string;
};

const staticTrustedImages: Record<string, StaticTrustedImage> = {
  epinephrine: {
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Epinephrine_1-1000_(1).JPG',
    sourceName: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Epinephrine_1-1000_(1).JPG',
    labelTitle: 'Epinephrine 1:1000 single-dose ampule',
    licenseNote: 'Open-license image; still verify against local formulation.',
  },
  adrenaline: {
    imageUrl: 'https://commons.wikimedia.org/wiki/Special:Redirect/file/Adrenaline_ampoule.pdf',
    sourceName: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Adrenaline_ampoule.pdf',
    labelTitle: 'Adrenaline ampoule visual reference',
    licenseNote: 'Open-license image; still verify against local formulation.',
  },
};

const searchAliases: Record<string, string> = {
  'n-acetylcysteine': 'acetylcysteine',
  nac: 'acetylcysteine',
  'lactated ringer': 'lactated ringers',
  lr: 'lactated ringers',
  'prothrombin complex concentrate': 'prothrombin complex concentrate',
  pcc: 'prothrombin complex concentrate',
  'digoxin-specific antibody fragments': 'digoxin immune fab',
  digibind: 'digoxin immune fab',
  digifab: 'digoxin immune fab',
  'pralidoxime': 'pralidoxime chloride',
  '2-pam': 'pralidoxime chloride',
  'tenecteplase': 'tenecteplase',
  tnk: 'tenecteplase',
};

function normalizeDrugName(raw: string) {
  const clean = raw.toLowerCase().replace(/\([^)]*\)/g, ' ').replace(/[^a-z0-9]+/g, ' ').trim();
  for (const [key, value] of Object.entries(searchAliases)) {
    if (clean.includes(key)) return value;
  }
  if (clean.includes('epinephrine')) return 'epinephrine';
  if (clean.includes('adrenaline')) return 'adrenaline';
  if (clean.includes('calcium')) return clean.includes('chloride') ? 'calcium chloride' : 'calcium gluconate';
  return clean.split(' ').slice(0, 3).join(' ');
}

function collectStrings(value: any): string[] {
  if (!value) return [];
  if (typeof value === 'string') return [value];
  if (Array.isArray(value)) return value.flatMap(collectStrings);
  if (typeof value === 'object') return Object.values(value).flatMap(collectStrings);
  return [];
}

function looksLikeImageUrl(url: string) {
  return /^https?:\/\//i.test(url) && /\.(png|jpe?g|gif|webp)(\?|$)/i.test(url);
}

function pickBestMediaUrl(mediaJson: any) {
  const candidates = collectStrings(mediaJson).filter(looksLikeImageUrl);
  const scored = candidates.map((url) => {
    const lower = url.toLowerCase();
    let score = 0;
    if (lower.includes('image')) score += 2;
    if (lower.includes('jpg') || lower.includes('jpeg') || lower.includes('png')) score += 2;
    if (lower.includes('logo') || lower.includes('icon')) score -= 4;
    if (lower.includes('spl') || lower.includes('setid')) score += 1;
    return { url, score };
  }).sort((a, b) => b.score - a.score);
  return scored[0]?.url;
}

function getSetIds(searchJson: any): { setid: string; title?: string }[] {
  const records = Array.isArray(searchJson?.data) ? searchJson.data : Array.isArray(searchJson?.results) ? searchJson.results : [];
  return records
    .map((r: any) => ({ setid: String(r.setid || r.setId || r.SETID || '').trim(), title: r.title || r.spl_version || r.name }))
    .filter((r: any) => r.setid)
    .slice(0, 6);
}

async function fetchJson(url: string) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 6500);
  try {
    const res = await fetch(url, { signal: controller.signal, headers: { accept: 'application/json' }, cache: 'no-store' });
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

export async function GET(request: NextRequest) {
  const accessDenied = await requireActiveApiUser();

  if (accessDenied) {
    return accessDenied;
  }
  const name = request.nextUrl.searchParams.get('name') || '';
  const normalized = normalizeDrugName(name);
  const staticKey = Object.keys(staticTrustedImages).find((key) => normalized.includes(key));
  if (staticKey) {
    return NextResponse.json({ status: 'verified', ...staticTrustedImages[staticKey], checkedAt: new Date().toISOString() });
  }

  const catalogCandidate = getTrustedDrugImageCandidate(normalized || name);
  if (catalogCandidate?.imageUrl) {
    return NextResponse.json({
      status: 'verified',
      imageUrl: catalogCandidate.imageUrl,
      sourceName: catalogCandidate.sourceName,
      sourceUrl: catalogCandidate.sourceUrl,
      labelTitle: catalogCandidate.displayName,
      reason: catalogCandidate.localVerification,
      checkedAt: new Date().toISOString(),
    });
  }

  const searchUrl = `https://dailymed.nlm.nih.gov/dailymed/services/v2/spls.json?drug_name=${encodeURIComponent(normalized)}&pagesize=8`;
  const searchJson = await fetchJson(searchUrl);
  const setIds = getSetIds(searchJson);

  for (const item of setIds) {
    const mediaUrl = `https://dailymed.nlm.nih.gov/dailymed/services/v2/spls/${encodeURIComponent(item.setid)}/media.json`;
    const mediaJson = await fetchJson(mediaUrl);
    const imageUrl = pickBestMediaUrl(mediaJson);
    if (imageUrl) {
      return NextResponse.json({
        status: 'candidate',
        imageUrl,
        sourceName: 'DailyMed SPL media',
        sourceUrl: `https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=${encodeURIComponent(item.setid)}`,
        labelTitle: item.title || normalized,
        setId: item.setid,
        checkedAt: new Date().toISOString(),
      });
    }
  }

  return NextResponse.json({
    status: catalogCandidate ? 'candidate' : 'pending',
    sourceName: catalogCandidate?.sourceName || 'DailyMed search',
    sourceUrl: catalogCandidate?.sourceUrl || `https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=${encodeURIComponent(normalized)}&searchdb=all`,
    labelTitle: catalogCandidate?.displayName || normalized,
    reason: catalogCandidate?.localVerification || 'No embeddable SPL product image found automatically. Manual pharmacy/admin image verification required.',
    checkedAt: new Date().toISOString(),
  });
}
