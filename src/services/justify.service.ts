/** Function that separates the text in line with the desired number of characters
 *
 * @param {string}
 * @param {number}
 * @param {number}
 * @param {boolean}
 * @returns {number}
 */
function getAvailableCut(
  text: string,
  index: number,
  minIndex: number,
  skipFirst: boolean
): number {
  let currentChar: string = text.charAt(index);
  let already: boolean =
    skipFirst && (currentChar == " " || currentChar == "\t");
  for (let i: number = index; i > minIndex; i--) {
    currentChar = text.charAt(i);
    if (currentChar == " " || currentChar == "\t") {
      if (!already) return i;
    } else if (already) already = false;
  }
  return -1;
}

/** Insert spaces to reach the character limit
 *
 * @param {string}
 * @param {number}
 * @returns
 */
function insertWhiteSpace(line: string, lineLimit: number): string {
  let missingCharCount = lineLimit - line.length;
  let possibilities: number[] = [];
  let current: number = line.length - 1;
  let index: number;

  while ((index = getAvailableCut(line, current, 0, true)) != -1) {
    possibilities.push(index);
    current = index;
  }
  for (let i = 0; i < missingCharCount; ++i) {
    current = possibilities[i % possibilities.length];
    for (let j = i % possibilities.length; j >= 0; --j) --possibilities[j];
    line = line.slice(0, current) + " " + line.slice(current);
  }
  return line;
}
/**,Function that justifies line by line and stores them to assemble them at the end
 *
 * @param {string}
 * @param {number}
 * @returns
 */
function justifyText(text: string, lineLimit: number): string {
  let lines: string[] = [];
  let current: number = 0;
  let nextCut: number;

  while (
    (nextCut = getAvailableCut(text, current + lineLimit, current, false)) != -1
  ) {
    lines.push(insertWhiteSpace(text.substring(current, nextCut), lineLimit));

    current = nextCut + 1;
  }
  return lines.join("\n");
}

export { justifyText };
