const removeHash = (hex: string) => {
  return hex[0] === '#' ? hex.slice(1) : hex;
};

const parseHex = (nakedHex: string) => {
  const isShort = nakedHex.length === 3;
  const twoDigitHexR = isShort ? nakedHex.slice(0, 1).concat(nakedHex.slice(0, 1)) : nakedHex.slice(0, 2);
  const twoDigitHexG = isShort ? nakedHex.slice(1, 2).concat(nakedHex.slice(1, 2)) : nakedHex.slice(2, 4);
  const twoDigitHexB = isShort ? nakedHex.slice(2, 3).concat(nakedHex.slice(2, 3)) : nakedHex.slice(4, 6);

  return {
    r: twoDigitHexR,
    g: twoDigitHexG,
    b: twoDigitHexB,
  };
};

const hexToDecimal = (hex: string) => {
  return parseInt(hex, 16);
};

interface RgbHexObject {
  r: string;
  g: string;
  b: string;
}

const hexesToDecimals = (_ref: RgbHexObject) => {
  const r = _ref.r,
    g = _ref.g,
    b = _ref.b;
  return {
    r: hexToDecimal(r),
    g: hexToDecimal(g),
    b: hexToDecimal(b),
  };
};

interface RgbDecimalObject {
  r: number;
  g: number;
  b: number;
}

const formatRgb = (decimalObject: RgbDecimalObject, alpha: number = 1) => {
  const r = decimalObject.r,
    g = decimalObject.g,
    b = decimalObject.b;
  return 'rgba('
    .concat(r.toString(), ',')
    .concat(g.toString(), ',')
    .concat(b.toString(), ',')
    .concat(alpha.toString(), ')');
};

const hexToRgba = (hex: string, a: number = 1) => {
  const hashlessHex = removeHash(hex);
  const hexObject = parseHex(hashlessHex);
  const decimalObject = hexesToDecimals(hexObject);
  return formatRgb(decimalObject, a);
};

export default hexToRgba;
