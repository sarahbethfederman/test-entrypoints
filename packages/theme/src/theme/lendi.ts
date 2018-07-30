const container = {
  width: '1024px',
};

const breakpoints = {
  mobile: 0,
  tablet: '46.0625em',
  desktop: '64.0625em',
};

const spacing = {
  0: 0,
  1: '4px',
  2: '8px',
  3: '16px',
  4: '24px',
  5: '64px',
  6: '80px',
};

const typography = {
  heading: {
    fontFamily: "'Cabin', sans-serif",
    sizes: [
      {
        fontSize: `46px`,
        lineHeight: 56 / 46,
        fontWeight: 'bold',
      },
      {
        fontSize: `37px`,
        lineHeight: 48 / 37,
        fontWeight: 'semi-bold',
      },
      {
        fontSize: `28px`,
        lineHeight: 36 / 28,
        fontWeight: 'semi-bold',
      },
      {
        fontSize: `22px`,
        lineHeight: 28 / 22,
        fontWeight: 'semi-bold',
      },
      {
        fontSize: `18px`,
        lineHeight: 24 / 18,
        fontWeight: 'semi-bold',
      },
      {
        fontSize: `15`,
        lineHeight: 20 / 15,
        fontWeight: 'semi-bold',
      },
    ],
  },

  body: {
    fontFamily: "'Open Sans', sans-serif",
    sizes: [
      {
        fontSize: `18px`,
        lineHeight: 24 / 18,
      },
      {
        fontSize: `16px`,
        lineHeight: 22 / 16,
      },
      {
        fontSize: `14px`,
        lineHeight: 20 / 14,
      },
      {
        fontSize: `13px`,
        lineHeight: 18 / 13,
      },
      {
        fontSize: `12px`,
        lineHeight: 16 / 12,
      },
      {
        fontSize: `11px`,
        lineHeight: 14 / 11,
      },
    ],
  },
};

const colors = {
  brand: {
    primary: '#00C0A5',
    'primary.dark': '#008C7A',
    'primary.medium': '#9DF2E7',
    'primary.light': '#EDF7F5',

    secondary: '#11564C',
    'secondary.dark': '#0C3D36',
    'secondary.medium': '#21A390',
    'secondary.light': '#EEF1F1',

    tertiary: '#FF7063',
    'tertiary.dark': '#C31C0D',
    'tertiary.medium': '#FF9F96',
    'tertiary.light': '#FFDFDC',

    quaternary: '#1A1918',
  },
  shade: ['#FFFFFF', '#FAFAFA', '#F7F7F7', '#DDDDDD', '#CCCCCC', '#AAAAAA', '#888888', '#4A4A4A', '#000000'].reverse(),
  alert: {
    info: '#488BD9',
    'info.dark': '#245792',
    'info.light': '#F1F4F8',

    warn: '#F5A623',
    'warn.dark': '#B87000',
    'warn.light': '#F9F5EF',

    error: '#FF1C4A',
    'error.dark': '#C81035',
    'error.light': '#FAEEF1',

    success: '#4EC000',
    'success.dark': '#378A00',
    'success.light': '#F1F7ED',
  },
};

export const theme = {
  container,
  breakpoints,
  spacing,
  typography,
  colors,
};
