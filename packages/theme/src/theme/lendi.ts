const typography = {
  heading: {
    fontFamily: "'Cabin', sans-serif",
  },

  body: {
    fontFamily: "'Open Sans', sans-serif",
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
  typography,
  colors,
};
