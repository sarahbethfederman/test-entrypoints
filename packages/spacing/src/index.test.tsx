import * as React from 'react';
import styled from 'styled-components';
import { mount } from 'enzyme';
import { Breakpoint } from '@lendi-ui/breakpoint';
import { Spacing, m, p, mx, my, ml, mb, mr, mt, pl, pb, pr, pt, py, px, SpacingNameOrSpacingNameMap, margin } from '.';

export const keys = Object.keys as <T>(o: T) => (Extract<keyof T, string>)[];

function createTests(n: string, fn: (size: SpacingNameOrSpacingNameMap) => any, rules: string[]) {
  describe(`${n}()`, () => {
    keys(Spacing).forEach((name) => {
      it(`should use the correct spacing for ${name}`, () => {
        const Component = styled.div`
          ${fn(name)};
        `;
        const element = mount(<Component />);
        rules.forEach((rule) => {
          expect(element).toHaveStyleRule(rule, Spacing[name]);
        });
      });
    });

    it(`should use the correct spacing at each breakpoint`, () => {
      const Component = styled.div`
        ${fn({ mobile: 'xxs', tablet: 'md', desktop: 'xxl' })};
      `;
      const element = mount(<Component />);
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

describe('margin', () => {
  const Component = styled.div`
    ${margin};
  `;

  keys(Spacing).forEach((name) => {
    it(`should use the correct spacing for m=${name}`, () => {
      const element = mount(<Component m={name} />);
      expect(element).toHaveStyleRule('margin', Spacing[name]);
    });
    it(`should use the correct spacing for mx=${name}`, () => {
      const element = mount(<Component mx={name} />);
      expect(element).toHaveStyleRule(`margin-left`, Spacing[name]);
      expect(element).toHaveStyleRule(`margin-right`, Spacing[name]);
    });
    it(`should use the correct spacing for my=${name}`, () => {
      const element = mount(<Component my={name} />);
      expect(element).toHaveStyleRule(`margin-top`, Spacing[name]);
      expect(element).toHaveStyleRule(`margin-bottom`, Spacing[name]);
    });
    it(`should use the correct spacing for mt=${name}`, () => {
      const element = mount(<Component mt={name} />);
      expect(element).toHaveStyleRule(`margin-top`, Spacing[name]);
    });
    it(`should use the correct spacing for mr=${name}`, () => {
      const element = mount(<Component mr={name} />);
      expect(element).toHaveStyleRule(`margin-right`, Spacing[name]);
    });
    it(`should use the correct spacing for mb=${name}`, () => {
      const element = mount(<Component mb={name} />);
      expect(element).toHaveStyleRule(`margin-bottom`, Spacing[name]);
    });
    it(`should use the correct spacing for ml=${name}`, () => {
      const element = mount(<Component ml={name} />);
      expect(element).toHaveStyleRule(`margin-left`, Spacing[name]);
    });
  });
});
