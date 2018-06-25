import { shallow } from 'enzyme';
import React from 'react';

import { Button } from './Button';

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

test("Simple sum", () => {
  expect(3 + 5).toBe(8);
})