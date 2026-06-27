import { studyPaths } from '@/data/studyPaths';

export type CertificateRecord = {
  serial: string;
  studentName: string;
  pathId: string;
  pathName: string;
  issuedAt: string;
  verificationUrl: string;
  status: 'valid' | 'revoked';
};

const pathCodes: Record<string, string> = {
  'beginner-emergency-medicine': 'BEG',
  'internship-jmc-exam': 'JMC',
  'jordanian-board': 'BOARD',
  'visual-learning': 'VIS',
};

export const CERTIFICATE_STORAGE_KEY = 'seg_certificates_v1';
export const STUDENT_NAME_KEY = 'seg_student_full_name';

export function getPathCode(pathId: string) {
  return pathCodes[pathId] || pathId.slice(0, 3).toUpperCase();
}

export function buildCertificateSerial(pathId: string, issuedAt = new Date()) {
  const year = issuedAt.getFullYear();
  const datePart = `${issuedAt.getMonth() + 1}`.padStart(2, '0') + `${issuedAt.getDate()}`.padStart(2, '0');
  const timePart = `${issuedAt.getHours()}`.padStart(2, '0') + `${issuedAt.getMinutes()}`.padStart(2, '0');
  return `SEG-${getPathCode(pathId)}-${year}-${datePart}${timePart}`;
}

export function getPathTitle(pathId: string) {
  return studyPaths.find((path) => path.id === pathId)?.title || pathId.replaceAll('-', ' ');
}

export function buildVerificationUrl(serial: string, origin?: string) {
  const base = origin || process.env.NEXT_PUBLIC_SITE_URL || 'https://smart-emergency-guide.netlify.app';
  return `${base.replace(/\/$/, '')}/certificates/verify/${encodeURIComponent(serial)}`;
}

export function parseCertificateSerial(serial: string) {
  const match = /^SEG-([A-Z0-9]+)-(\d{4})-(\d{8})$/.exec(serial);
  if (!match) return null;
  return { code: match[1], year: match[2], stamp: match[3] };
}
