import * as React from 'react';
import { mount } from 'enzyme';
import Theme from '@lendi-ui/theme';
import { RightSidebar } from './index';
import { BrokerFaces, BrokerFace, BrokerName } from './index.style';

describe('RightSidebar', () => {
  it('should render generic broker details when there is no broker', () => {
    const sidebar = mount(
      <Theme>
        <RightSidebar show={true} />
      </Theme>
    );
    expect(sidebar.find(BrokerFaces)).toHaveLength(1);
    expect(sidebar.find(BrokerFace)).toHaveLength(0);
    expect(sidebar.find(BrokerName)).toHaveLength(0);
  });

  it('should render specific broker details when there is a broker', () => {
    const sidebar = mount(
      <Theme>
        <RightSidebar
          show={true}
          broker={{
            fullName: 'Donald',
            photo: 'https://images-na.ssl-images-amazon.com/images/I/61BSNoLCikL._SY355_.jpg',
          }}
        />
      </Theme>
    );
    expect(sidebar.find(BrokerFaces)).toHaveLength(0);
    expect(sidebar.find(BrokerFace)).toHaveLength(1);
    expect(sidebar.find(BrokerName)).toHaveLength(1);
  });
});
