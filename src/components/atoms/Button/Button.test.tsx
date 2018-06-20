import { shallow } from 'enzyme';
import React from 'react';

import { Button } from '../Button/Button';

it('renders', () => {
  const result = shallow(
    <Button
      label={"label"}
      disabled={false}
      onClick={() => {}}
    />
  );

  expect(result).toBeTruthy();
});