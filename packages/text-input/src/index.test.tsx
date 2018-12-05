import * as React from 'react';
import { mount } from 'enzyme';
import Theme from '@lendi-ui/theme';
import Input from './index';
import { InputSize, InputWrapper, Layout, BeforeWrapper, AfterWrapper } from './index.style';

const sizes: InputSize[] = ['lg', 'md', 'sm'];

let element;

function render(props) {
  element = mount(
    <Theme>
      <Input value={props.value} placeholder="input here ..." onChange={jest.fn()} {...props} />
    </Theme>
  );
}

describe('input', () => {
  it('it should render the whole input component and a text input', () => {
    render({});
    expect(element.find(Layout).length).toEqual(1);
    expect(element.find(Layout)).not.toHaveStyleRule('width', '100%');
    expect(element.find(InputWrapper).length).toEqual(1);
    expect(element.find(BeforeWrapper).length).toEqual(0);
    expect(element.find(AfterWrapper).length).toEqual(0);
    expect(element).toMatchSnapshot();
  });

  it('it should render the before component when there is a before element', () => {
    const before = <span style={{ width: '24px', height: '24px' }}>x</span>;
    render({ before });
    expect(element.find(BeforeWrapper).length).toEqual(1);
  });

  it('it should render the after component when there is a after element', () => {
    const after = <span style={{ width: '24px', height: '24px' }}>x</span>;
    render({ after });
    expect(element.find(AfterWrapper).length).toEqual(1);
  });

  describe('it should match all styles in different size of Input component', () => {
    sizes.forEach((size) => {
      describe(`${size}`, () => {
        it('it should render 100% width of Input component', () => {
          const isFullWidth = true;
          render({ isFullWidth });
          expect(element.find(Layout)).toHaveStyleRule('width', '100%');
        });

        it('it should render readonly style of Input component', () => {
          const isDisabled = true;
          render({ isDisabled });
          expect(element).toMatchSnapshot();
        });

        it('it should render dark theme style of Input component', () => {
          const isInverse = true;
          render({ isInverse });
          expect(element).toMatchSnapshot();
        });

        it('it should render error style of Input component', () => {
          const isError = true;
          render({ isError });
          expect(element).toMatchSnapshot();
        });
      });
    });
  });
});
