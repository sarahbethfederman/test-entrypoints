import * as React from 'react';
import { SessionProvider, Session } from '@lendi/lala-react';
import { Brand, Type, Environment } from '@lendi/lala-utils';
import NavbarLalaAuth from './NavbarLalaAuth';

export const session = new Session({
  brand: Brand.Lendi,
  type: Type.Customer,
  environment: Environment.Development,
});

export default () => {
  return (
    <SessionProvider session={session}>
      <NavbarLalaAuth />
    </SessionProvider>
  );
};
