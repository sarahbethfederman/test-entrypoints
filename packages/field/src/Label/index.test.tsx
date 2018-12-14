import * as React from 'react';
import { mount } from 'enzyme';
import Label from './index';
import { LabelBody, LabelHeading, AssistiveBody } from './index.style';
import { Link } from '@lendi-ui/typography';
import Theme from '@lendi-ui/theme';

let wrapper;

function render(props) {
  wrapper = mount(
    <Theme>
      <Label label="First name" {...props} />
    </Theme>
  );
}

describe('Large Label', () => {
  const size = 'sm';
  const link = <Link size="sm">forgot?</Link>;
  const assistiveText = 'Assistive text';
  it('it should render LUI "md" body component', () => {
    render({ size });
    expect(wrapper.find(LabelBody).length).toEqual(1);
    expect(wrapper.find('strong').length).toEqual(1);
    expect(wrapper.find(LabelBody).prop('size')).toEqual('md');
    expect(wrapper.find('strong').prop('children')[0]).toEqual('First name');
    expect(wrapper.find(LabelBody)).toMatchSnapshot();
  });

  it('it should render LUI "md" Link component', () => {
    render({ size, link });
    expect(wrapper.find(Link).length).toEqual(1);
    expect(wrapper.find(Link).prop('size')).toEqual('sm');
    expect(wrapper.find(Link).prop('children')).toEqual('forgot?');
    expect(wrapper.find(Link)).toMatchSnapshot();
  });

  it('it should render LUI "md" Body assistive text component', () => {
    render({ size, link, assistiveText });
    expect(wrapper.find(AssistiveBody).length).toEqual(1);
    expect(wrapper.find(AssistiveBody).prop('size')).toEqual('xs');
    expect(wrapper.find(AssistiveBody).prop('children')).toEqual('Assistive text');
    expect(wrapper.find(AssistiveBody)).toMatchSnapshot();
  });
});

describe('Large Label', () => {
  const size = 'lg';
  const link = <Link size="md">forgot?</Link>;
  const assistiveText = 'Assistive text';
  it('it should render LUI "md" heading component', () => {
    render({ size });
    expect(wrapper.find(LabelHeading).length).toEqual(1);
    expect(wrapper.find(LabelHeading).prop('size')).toEqual('md');
    expect(wrapper.find(LabelHeading).prop('children')[0]).toEqual('First name');
    expect(wrapper.find(LabelHeading)).toMatchSnapshot();
  });

  it('it should render LUI "md" Link component', () => {
    render({ size, link });
    expect(wrapper.find(Link).length).toEqual(1);
    expect(wrapper.find(Link).prop('size')).toEqual('md');
    expect(wrapper.find(Link).prop('children')).toEqual('forgot?');
    expect(wrapper.find(Link)).toMatchSnapshot();
  });

  it('it should render LUI "md" Body assistive text component', () => {
    render({ size, link, assistiveText });
    expect(wrapper.find(AssistiveBody).length).toEqual(1);
    expect(wrapper.find(AssistiveBody).prop('size')).toEqual('md');
    expect(wrapper.find(AssistiveBody).prop('children')).toEqual('Assistive text');
    expect(wrapper.find(AssistiveBody)).toMatchSnapshot();
  });
});
