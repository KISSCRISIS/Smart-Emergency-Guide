export type ParsedQuestion = {
  id: string;
  specialty: string;
  moduleId: string;
  moduleTitle: string;
  questionNumber: number;
  stem: string;
  options: { A?: string; B?: string; C?: string; D?: string; E?: string };
  correctAnswer?: "A" | "B" | "C" | "D" | "E";
  explanation?: string;
  arabicExplanation?: string;
  needsReview?: boolean;
  sourceFile: string;
};

export type ParsedModule = {
  id: string;
  title: string;
  questions: ParsedQuestion[];
};

function parseOptionsFromText(text: string): { A?: string; B?: string; C?: string; D?: string; E?: string } {
  const opts: { A?: string; B?: string; C?: string; D?: string; E?: string } = {};
  for (const letter of ['A','B','C','D','E'] as const) {
    const idx = text.indexOf(`${letter}. `);
    if (idx < 0) continue;
    const start = idx + 3;
    const rest = text.slice(start);
    const nextLetter = rest.search(/\s+[B-E]\.\s/);
    const nextMark = rest.search(/\*\*/);
    let end = rest.length;
    if (nextLetter > -1) end = Math.min(end, nextLetter);
    if (nextMark > -1) end = Math.min(end, nextMark);
    opts[letter] = rest.slice(0, end).trim()
      .replace(/\*\*/g, '')
      .replace(/##\s*Answer:\s*[A-E]/gi, '')
      .replace(/Correct Answer:\s*[A-E]/gi, '')
      .replace(/Answer:\s*[A-E]/gi, '')
      .trim();
  }
  return opts;
}

export function parseQuestions(rawText: string, specialty: string, sourceFile: string): ParsedModule[] {
  // Strip frontmatter
  let text = rawText.replace(/^---[\s\S]*?---\s*/, '').trim();

  // Split by module/chapter headers: ## MODULE X:, MODULE X:, # Chapter X:
  const moduleChunks = text.split(/(?:^|\s)#{1,3}\s*(?=(?:MODULE|Module|Chapter)\s+\d+[:\s])/mi).filter(Boolean);

  // If no module chunks found, try splitting by --- and look for MODULE within
  if (moduleChunks.length <= 1) {
    const altChunks = text.split(/\s*---+\s*/).filter(Boolean);
    // Search for chunks containing MODULE
    const modChunks: string[] = [];
    let headerChunk = '';
    for (const ch of altChunks) {
      if (/MODULE\s+\d+/i.test(ch)) {
        modChunks.push(ch);
      } else if (modChunks.length === 0) {
        headerChunk = ch; // skip header/title text
      }
    }
    if (modChunks.length > 0 && headerChunk) {
      // Use the found module chunks
      return processModuleChunks(modChunks, specialty, sourceFile);
    }
  }

  if (moduleChunks.length <= 1 && moduleChunks[0] && /Internal Medicine|Surgery|Pediatrics|Question Bank/i.test(moduleChunks[0])) {
    // First chunk is just header text, try to find MODULE within it
    const modMatch = moduleChunks[0].match(/##\s*MODULE\s+(\d+)[:\s]+([^-]+)/);
    if (modMatch) {
      const idx = moduleChunks[0].indexOf('## MODULE');
      if (idx > 0) {
        const headerText = moduleChunks[0].slice(0, idx);
        const realContent = moduleChunks[0].slice(idx);
        return processModuleChunks([realContent], specialty, sourceFile);
      }
    }
  }

  return processModuleChunks(moduleChunks, specialty, sourceFile);
}

function processModuleChunks(chunks: string[], specialty: string, sourceFile: string): ParsedModule[] {
  const modules: ParsedModule[] = [];

  for (const chunk of chunks) {
    // Extract clean module title — stop before ###, **, or after reasonable title length
    const modMatch = chunk.match(/(?:MODULE|Module|Chapter)\s+(\d+)[:\s]+([^#*]+?)(?=\s*#{1,3}|\s*\*\*|$)/i);
    if (!modMatch) continue;
    let rawTitle = modMatch[2].trim();
    // If title is too long or contains question markers, truncate
    if (rawTitle.length > 120 || /Q\d+:|Correct Answer|Explanation/i.test(rawTitle)) {
      rawTitle = rawTitle.replace(/\s*#{1,3}.*$/,'').replace(/\s*\*\*.*$/,'').trim();
      if (rawTitle.length > 120) rawTitle = rawTitle.slice(0, 120) + '...';
    }
    const modIndex = modules.length;
    const modTitle = `Module ${modMatch[1]}: ${rawTitle}`;
    const modId = `${modIndex}-` + modTitle.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '').slice(0, 80);

    const questions: ParsedQuestion[] = [];

    // Split questions by --- (with optional surrounding spaces)
    const qBlocks = chunk.split(/\s*---+\s*/).filter(Boolean);

    let qNum = 0;
    for (const qb of qBlocks) {
      // Must contain a question marker or MCQ pattern
      const hasQMarker = /\*\*\s*Q\d+:\s*\*\*/.test(qb) || /Q\d+:/.test(qb);
      const hasOptions = /[A-E]\.\s/.test(qb);
      if (!hasQMarker && !hasOptions) continue;
      if (qb.length < 30) continue;

      // Skip if this is a module header line, not a question
      if (/^#{1,3}\s*MODULE/i.test(qb.trim())) continue;
      if (/^#{1,3}\s*(?:Internal Medicine|Surgery|Pediatrics|Internship)/i.test(qb.trim())) continue;

      qNum++;

      // Extract stem: text before first option
      const optIdx = qb.search(/[A-E]\.\s/);
      let stem = '';
      if (optIdx > -1) {
        stem = qb.slice(0, optIdx).trim();
      } else {
        stem = qb.split('\n')[0].trim();
      }
      // Clean stem — remove markers, module headers, known label patterns
      stem = stem
        .replace(/^#{1,3}\s*MODULE\s+\d+[:\s]+[^#*]+/gi, '') // remove module header
        .replace(/###\s*MCQ\s*Questions\s*/gi, '')
        .replace(/\*\*\s*Q\d+:?\s*\*\*/gi, '')
        .replace(/^#+\s*[^\n]*/gm, '')
        .replace(/^\s*[-–—]\s*/gm, '')
        .replace(/\*\*Correct Answer\*\*:\s*[A-E]/gi, '')
        .replace(/\*\*Explanation\*\*:[^\n]*/gi, '')
        .replace(/\*\*Arabic Explanation\*\*:[^\n]*/gi, '')
        .replace(/\*\*needsReview\*\*:[^\n]*/gi, '')
        .replace(/\*\*/g, '')
        .replace(/Correct Answer:\s*[A-E]/gi, '')
        .replace(/Answer:\s*[A-E]/gi, '')
        .trim();

      if (stem.length < 10) continue;

      // Extract options
      const options = parseOptionsFromText(qb);

          // Extract correct answer — supports multiple formats
      const ansMatch = qb.match(/(?:\*\*\s*Correct Answer:\s*\*\*\s*|##\s*Answer:\s*|Correct Answer:\s*|Answer:\s*)([A-E])/i);
      const correctAnswer = ansMatch ? (ansMatch[1].toUpperCase() as "A"|"B"|"C"|"D"|"E") : undefined;

      // Extract explanation — supports ** Explanation:**, ## Answer: X - text, and inline after answer
      let explanation: string | undefined;
      const expMatch = qb.match(/(?:\*\*\s*Explanation:\s*\*\*\s*|##\s*Explanation:\s*)([\s\S]*?)(?=(?:\*\*\s*(?:Arabic Explanation|needsReview)|$))/i);
      if (expMatch) {
        explanation = expMatch[1].trim().replace(/\*\*/g, '');
      } else if (ansMatch) {
        // Pediatrics-style: explanation is text after ## Answer: X on the same line
        const afterAnswer = qb.slice(ansMatch.index! + ansMatch[0].length);
        // Extract text up to next section marker or reasonable length
        const clean = afterAnswer.replace(/^\s*[-–—]\s*/, '').replace(/\*\*/g, '').trim();
        if (clean.length > 5 && !/^[A-E][\.\)]\s/.test(clean)) {
          explanation = clean.slice(0, 1500);
        }
      }

      // Extract Arabic explanation
      const arMatch = qb.match(/\*\*\s*Arabic Explanation\s*:\s*\*\*\s*([\s\S]*?)(?=\*\*\s*needsReview|$)/i);
      let arabicExplanation = arMatch ? arMatch[1].trim() : undefined;
      if (arabicExplanation && /[Ã˜Ã™Ã›Ã™Ë†ÃšÂ©Ã›Å'Ã˜]/.test(arabicExplanation)) {
        arabicExplanation = "[Arabic explanation needs source encoding review]";
      }

      const needsReview = !correctAnswer || Object.keys(options).length < 2;

      questions.push({
        id: `${modId}-q${qNum}`,
        specialty,
        moduleId: modId,
        moduleTitle: modTitle,
        questionNumber: qNum,
        stem: stem.slice(0, 600),
        options,
        correctAnswer,
        explanation,
        arabicExplanation,
        needsReview,
        sourceFile,
      });
    }

    if (questions.length > 0) {
      modules.push({ id: modId, title: modTitle, questions });
    }
  }

  // Fallback: if no modules detected but content has questions
  if (modules.length === 0) {
    const allQuestions: ParsedQuestion[] = [];
    const qBlocks = chunks.join(' ').split(/\s*---+\s*/).filter(Boolean);
    let qNum = 0;
    for (const qb of qBlocks) {
      const hasOptions = /[A-E]\.\s/.test(qb);
      if (!hasOptions || qb.length < 30) continue;
      if (/^#{1,3}\s*(?:MODULE|Internal|Surgery|Pediatrics|Internship)/i.test(qb.trim())) continue;
      qNum++;
      const optIdx = qb.search(/[A-E]\.\s/);
      let stem = optIdx > -1 ? qb.slice(0, optIdx).trim() : qb.split('\n')[0].trim();
      stem = stem.replace(/\*\*/g, '').replace(/Q\d+:?\s*/gi, '').trim();
      if (stem.length < 10) continue;
      const options = parseOptionsFromText(qb);
      const ansMatch = qb.match(/(?:Correct Answer|Answer):\s*\**\s*([A-E])/i);
      allQuestions.push({
        id: `fallback-q${qNum}`, specialty, moduleId: 'fallback', moduleTitle: 'Imported Questions',
        questionNumber: qNum, stem: stem.slice(0, 600), options,
        correctAnswer: ansMatch ? (ansMatch[1].toUpperCase() as "A"|"B"|"C"|"D"|"E") : undefined,
        sourceFile, needsReview: !ansMatch,
      });
    }
    if (allQuestions.length > 0) {
      modules.push({ id: 'fallback', title: 'Imported Questions', questions: allQuestions });
    }
  }

  return modules;
}
