import * as React from 'react';
import styled from 'styled-components';
import { shallow } from 'enzyme';
import { m, p, mx, my, ml, mb, mr, mt, pl, pb, pr, pt, py, px, SizeOrSizeMap } from '.';

const breakpoints = {
  mobile: '0',
  tablet: '40em',
  desktop: '80em',
};

const spacing = ['0', '4px', '8px', '32px'];

const theme = { breakpoints, spacing };

function createTests(n: string, fn: (size: SizeOrSizeMap) => any, rules: string[]) {
  describe(`${n}()`, () => {
    spacing.forEach((value, name) => {
      it(`should use the correct spacing for ${name}`, () => {
        const Component = styled.div`
          ${fn(name)};
        `;
        const element = shallow(<Component theme={theme} />);
        rules.forEach((rule) => {
          expect(element).toHaveStyleRule(rule, value);
        });
      });
    });

    it(`should use the correct spacing at each breakpoint`, () => {
      const Component = styled.div`
        ${fn({ mobile: 0, tablet: 1, desktop: 2 })};
      `;
      const element = shallow(<Component theme={theme} />);
      rules.forEach((rule1) => {
        expect(element).toHaveStyleRule(rule1, spacing[0], {
          media: `(min-width: ${breakpoints.mobile})`,
        });
        rules.forEach((rule2) => {
          expect(element).toHaveStyleRule(rule2, spacing[1], {
            media: `(min-width: ${breakpoints.tablet})`,
          });
        });
        rules.forEach((rule3) => {
          expect(element).toHaveStyleRule(rule3, spacing[2], {
            media: `(min-width: ${breakpoints.desktop})`,
          });
        });
      });
    });
  });
}

createTests('m', m, ['margin']);
createTests('mx', mx, ['margin-left', 'margin-right']);
createTests('my', my, ['margin-top', 'margin-bottom']);
createTests('mt', mt, ['margin-top']);
createTests('mr', mr, ['margin-right']);
createTests('mb', mb, ['margin-bottom']);
createTests('ml', ml, ['margin-left']);

createTests('p', p, ['padding']);
createTests('mx', px, ['padding-left', 'padding-right']);
createTests('py', py, ['padding-top', 'padding-bottom']);
createTests('pt', pt, ['padding-top']);
createTests('pr', pr, ['padding-right']);
createTests('pb', pb, ['padding-bottom']);
createTests('pl', pl, ['padding-left']);
