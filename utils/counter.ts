function isWord(str: string): boolean {
  for (const char of str) {
    const code = char.charCodeAt(0);
    if (
      (code >= 48 && code <= 57) ||
      (code >= 65 && code <= 90) ||
      (code >= 97 && code <= 122)
    ) {
      return true;
    }
  }
  return false;
}

function wordCounter(input: string): number {
  const words = input.split(/\s+/);
  let wordCount = 0;

  for (const word of words) {
    if (isWord(word)) {
      wordCount++;
    }
  }

  return wordCount;
}

export default function counter(content: string, wordsPerMinute: number = 238): string {
  const wordCount = wordCounter(content);
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  return `${minutes} min read`;
}