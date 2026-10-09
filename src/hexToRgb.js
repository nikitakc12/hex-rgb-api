/**
 * Converts a six-digit hexadecimal colour into RGB components.
 * Accepts an optional leading # and uppercase or lowercase letters.
 *
 * @param {string} hex - A colour such as "#FF0000" or "ff0000".
 * @returns {{r: number, g: number, b: number}} RGB values from 0 to 255.
 * @throws {Error} If the input is not a valid six-digit hexadecimal colour.
 */
function hexToRgb(hex) {
  if (
    typeof hex !== 'string' ||
    !/^#?[0-9a-fA-F]{6}$/.test(hex)
  ) {
    throw new Error('Use six hexadecimal digits, with an optional #.');
  }

  const value = hex.startsWith('#') ? hex.slice(1) : hex;

  return {
    r: parseInt(value.slice(0, 2), 16),
    g: parseInt(value.slice(2, 4), 16),
    b: parseInt(value.slice(4, 6), 16)
  };
}

module.exports = hexToRgb;