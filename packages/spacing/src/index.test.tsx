import * as React from 'react';
import styled from 'styled-components';
import { shallow } from 'enzyme';
import { Breakpoint } from '@lendi-ui/breakpoint';
import { Spacing, m, p, mx, my, ml, mb, mr, mt, pl, pb, pr, pt, py, px, SpacingNameOrNameMap } from '.';

export const keys = Object.keys as <T>(o: T) => (Extract<keyof T, string>)[];

function createTests(n: string, fn: (size: SpacingNameOrNameMap) => any, rules: string[]) {
  describe(`${n}()`, () => {
    keys(Spacing).forEach((name) => {
      it(`should use the correct spacing for ${name}`, () => {
        const Component = styled.div`
          ${fn(name)};
        `;
        const element = shallow(<Component />);
        rules.forEach((rule) => {
          expect(element).toHaveStyleRule(rule, Spacing[name]);
        });
      });
    });

    it(`should use the correct spacing at each breakpoint`, () => {
      const Component = styled.div`
        ${fn({ mobile: 'xxs', tablet: 'md', desktop: 'xxl' })};
      `;
      const element = shallow(<Component />);
      rules.forEach((rule1) => {
        expect(element).toHaveStyleRule(rule1, Spacing.xxs, {
          media: `(min-width:${Breakpoint.mobile})`,
        });
        rules.forEach((rule2) => {
          expect(element).toHaveStyleRule(rule2, Spacing.md, {
            media: `(min-width:${Breakpoint.tablet})`,
          });
        });
        rules.forEach((rule3) => {
          expect(element).toHaveStyleRule(rule3, Spacing.xxl, {
            media: `(min-width:${Breakpoint.desktop})`,
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
