import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import { Icon } from './Icon';

/**
 * Parses all elements on the DOM, checks no duplicate ids
 */
const hasMultipleIds = () => {
  var ids = {};
  var all = document.getElementsByTagName('*');

  for (var i = 0, l = all.length; i < l; i++) {
    var id = all[i].id;
    if (id) {
      if (ids[id]) {
        return true;
      } else {
        ids[id] = 1;
      }
    }
  }
  return false;
};

describe('Icon component', () => {
  let textResolve = Promise.resolve('<svg />');
  let fetchResponse = Promise.resolve({
    text: () => textResolve,
  });
  let fetchMock = jest.fn(() => fetchResponse);

  beforeEach(() => {
    (window as any).fetch = fetchMock;
  });

  it('only returns once', async () => {
    const wrapper1 = mount(<Icon name="check" />);
    const wrapper2 = mount(<Icon name="star" />);

    await textResolve;
    expect(window.fetch).toHaveBeenCalledTimes(1);
  });

  it('should fetch the correct resource', async () => {
    const wrapper = mount(<Icon name="check" />);

    await expect(fetchMock).toBeCalledWith('./sprite.symbol.svg');
  });

  it('should be inserted into the DOM once', () => {
    const wrapper1 = mount(<Icon name="check" />);
    const wrapper2 = mount(<Icon name="check" />);

    expect(hasMultipleIds()).toBe(false);
  });
});
