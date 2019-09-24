import * as React from 'react';
import styled from 'styled-components';
import { mount } from 'enzyme';
import { Breakpoint } from '@lendi-ui/breakpoint';
import { color, fg, bg } from '.';
import { theme as lendiTheme, ColorsMap, ThemeMap } from '@lendi-ui/theme';

// hex color value to rgb
// #008000 : rgb(0,128,0)
// #006400 : rgb(0,100,0)
// #556B2F : rgb(85,107,47)
// #20B2AA : rgb(32,178,170)

const colors: Partial<ColorsMap> = {
  'primary.500': '#008000',
  'primary.700': '#006400',
  'secondary.25': '#556B2F',
  'shade.0': '#20B2AA',
};

const theme: Partial<ThemeMap> = {
  colors: {
    ...lendiTheme.colors,
    ...colors,
  },
};

describe('color()', () => {
  it('should extract the color value from the theme by name', () => {
    expect(color('primary.500')({ theme })).toEqual('rgba(0,128,0,1)');
  });

  it('should extract the color value from the theme by name and transparency value', () => {
    expect(color('primary.500', 0.6)({ theme })).toEqual('rgba(0,128,0,0.6)');
  });
});

describe('fg()', () => {
  it('should use the color value from the theme by name', () => {
    const Component = styled.div`
      ${fg('primary.500')};
    `;
    const element = mount(<Component theme={theme} />);
    expect(element).toHaveStyleRule('color', 'rgba(0,128,0,1)');
  });

  it('should use the color value from the theme by name at each breakpoint', () => {
    const Component = styled.div`
      ${fg({ mobile: 'primary.700', tablet: 'shade.0', desktop: 'secondary.25' })};
    `;
    const element = mount(<Component theme={theme} />);
    expect(element).toHaveStyleRule('color', 'rgba(0,100,0,1)', {
      media: `(min-width:${Breakpoint.mobile})`,
    });
    expect(element).toHaveStyleRule('color', 'rgba(32,178,170,1)', {
      media: `(min-width:${Breakpoint.tablet})`,
    });
    expect(element).toHaveStyleRule('color', 'rgba(85,107,47,1)', {
      media: `(min-width:${Breakpoint.desktop})`,
    });
  });
});

describe('fg() with transparency', () => {
  it('should use the color value from the theme by name and transparency', () => {
    const Component = styled.div`
      ${fg('primary.500', 0.6)};
    `;
    const element = mount(<Component theme={theme} />);
    expect(element).toHaveStyleRule('color', 'rgba(0,128,0,0.6)');
  });

  it('should use the color value from the theme by name at each breakpoint', () => {
    const Component = styled.div`
      ${fg({ mobile: 'primary.700', tablet: 'shade.0', desktop: 'secondary.25' }, 0.6)};
    `;
    const element = mount(<Component theme={theme} />);
    expect(element).toHaveStyleRule('color', 'rgba(0,100,0,0.6)', {
      media: `(min-width:${Breakpoint.mobile})`,
    });
    expect(element).toHaveStyleRule('color', 'rgba(32,178,170,0.6)', {
      media: `(min-width:${Breakpoint.tablet})`,
    });
    expect(element).toHaveStyleRule('color', 'rgba(85,107,47,0.6)', {
      media: `(min-width:${Breakpoint.desktop})`,
    });
  });
});

describe('bg()', () => {
  it('should use the color value from the theme by name', () => {
    const Component = styled.div`
      ${bg('primary.500')};
    `;
    const element = mount(<Component theme={theme} />);
    expect(element).toHaveStyleRule('background-color', 'rgba(0,128,0,1)');
  });

  it('should use the color value from the theme by name at each breakpoint', () => {
    const Component = styled.div`
      ${bg({ mobile: 'primary.700', tablet: 'shade.0', desktop: 'secondary.25' })};
    `;
    const element = mount(<Component theme={theme} />);
    expect(element).toHaveStyleRule('background-color', 'rgba(0,100,0,1)', {
      media: `(min-width:${Breakpoint.mobile})`,
    });
    expect(element).toHaveStyleRule('background-color', 'rgba(32,178,170,1)', {
      media: `(min-width:${Breakpoint.tablet})`,
    });
    expect(element).toHaveStyleRule('background-color', 'rgba(85,107,47,1)', {
      media: `(min-width:${Breakpoint.desktop})`,
    });
  });
});

describe('bg() with transparency', () => {
  it('should use the color value from the theme by name', () => {
    const Component = styled.div`
      ${bg('primary.500', 0.6)};
    `;
    const element = mount(<Component theme={theme} />);
    expect(element).toHaveStyleRule('background-color', 'rgba(0,128,0,0.6)');
  });

  it('should use the color value from the theme by name at each breakpoint', () => {
    const Component = styled.div`
      ${bg({ mobile: 'primary.700', tablet: 'shade.0', desktop: 'secondary.25' }, 0.6)};
    `;
    const element = mount(<Component theme={theme} />);
    expect(element).toHaveStyleRule('background-color', 'rgba(0,100,0,0.6)', {
      media: `(min-width:${Breakpoint.mobile})`,
    });
    expect(element).toHaveStyleRule('background-color', 'rgba(32,178,170,0.6)', {
      media: `(min-width:${Breakpoint.tablet})`,
    });
    expect(element).toHaveStyleRule('background-color', 'rgba(85,107,47,0.6)', {
      media: `(min-width:${Breakpoint.desktop})`,
    });
  });
});
