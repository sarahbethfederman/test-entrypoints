import * as Enzyme from 'enzyme';
import * as React from 'react';

import { Button } from './Button';

it('renders', () => {
  const result = Enzyme.shallow(
    <Button
      label="label"
      disabled={false}
      onClick={undefined}
    />
  );

  expect(result).toBeTruthy();
});

test("Simple sum", () => {
  expect(3 + 5).toBe(8);
});
