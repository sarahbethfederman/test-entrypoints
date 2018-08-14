import { select } from '.';

describe('select()', () => {
  it('should throw an error when the theme is not defined', () => {
    expect(() => select('breakpoints.mobile')({})).toThrow('Theme not found.');
  });

  it('should return the value when the path exists in the theme', () => {
    expect(select('version')({ theme: { version: '1.0.0' } })).toEqual('1.0.0');
    expect(select('breakpoints.mobile')({ theme: { breakpoints: { mobile: 0 } } })).toEqual(0);
    expect(select('colors.primary.500')({ theme: { colors: { primary: { '500': 'green' } } } })).toEqual('green');
    expect(select('colors.primary.800')({ theme: { colors: { 'primary.800': 'green' } } })).toEqual('green');
    expect(select('colors.primary.500')({ theme: { colors: { primary: { '500': 'green' } } } })).toEqual('green');
  });

  it('should return the default value when the path does not exist in the theme', () => {
    expect(select('version', '1.0.0')({ theme: {} })).toEqual('1.0.0');
    expect(select('breakpoints.mobile', 0)({ theme: {} })).toEqual(0);
    expect(select('breakpoints.mobile', 0)({ theme: { breakpoints: {} } })).toEqual(0);
    expect(select('colors.primary', 'green')({ theme: {} })).toEqual('green');
    expect(select('colors.primary', 'green')({ theme: { colors: {} } })).toEqual('green');
    expect(select('colors.primary', 'green')({ theme: { colors: { primary: 'green' } } })).toEqual('green');
    expect(select('colors.primary.800', 'green')({ theme: {} })).toEqual('green');
    expect(select('colors.primary.800', 'green')({ theme: { colors: {} } })).toEqual('green');
    expect(select('colors.primary.800', 'green')({ theme: { colors: { brand: {} } } })).toEqual('green');
  });

  it('should throw an error when the path does not exist in the theme', () => {
    expect(() => select('version')({ theme: {} })).toThrow('Could not find a property named "version" on the theme');
    expect(() => select('breakpoints.mobile')({ theme: {} })).toThrow(
      'Could not find a property named "breakpoints.mobile" on the theme'
    );
    expect(() => select('breakpoints.mobile')({ theme: { breakpoints: {} } })).toThrow(
      'Could not find a property named "breakpoints.mobile" on the theme'
    );
    expect(() => select('colors.brand.primary')({ theme: {} })).toThrow(
      'Could not find a property named "colors.brand.primary" on the theme'
    );
    expect(() => select('colors.brand.primary')({ theme: { colors: {} } })).toThrow(
      'Could not find a property named "colors.brand.primary" on the theme'
    );
    expect(() => select('colors.brand.primary')({ theme: { colors: { brand: {} } } })).toThrow(
      'Could not find a property named "colors.brand.primary" on the theme'
    );
    expect(() => select('colors.brand.primary.dark')({ theme: {} })).toThrow(
      'Could not find a property named "colors.brand.primary.dark" on the theme'
    );
    expect(() => select('colors.brand.primary.dark')({ theme: { colors: {} } })).toThrow(
      'Could not find a property named "colors.brand.primary.dark" on the theme'
    );
    expect(() => select('colors.brand.primary.dark')({ theme: { colors: { brand: {} } } })).toThrow(
      'Could not find a property named "colors.brand.primary.dark" on the theme'
    );
  });
});
