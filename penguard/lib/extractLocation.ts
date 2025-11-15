export function extractJohannesburg(value: string): string | null {
  const match = value.match(/\bJohannesburg\b/i);
  return match ? match[0] : null;
}