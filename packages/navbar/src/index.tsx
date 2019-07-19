import * as React from 'react';
import ApplicationNavbar from './Application/index';
import { MarketingNavbar } from './Marketing/index';
import { Application, Broker } from './common/types';
import { LUIGlobalProps } from '@lendi-ui/utils';

export type NavbarType = 'SEM' | 'Application' | 'Marketing';
export interface ApplicationNavbarProps extends LUIGlobalProps {
  type: NavbarType;
  isAuthenticated?: boolean;
  application?: Application;
  broker?: Broker;
  onChat?: () => void;
  onLogout?: () => void;
  variant?: 'transparent' | 'white';
  params?: string;
}

const Navbar = ({
  type,
  isAuthenticated,
  application = {},
  broker,
  onChat,
  onLogout,
  variant,
  params,
}: ApplicationNavbarProps) => {
  switch (type) {
    case 'Application':
      return (
        <ApplicationNavbar
          onChat={onChat}
          broker={broker}
          onLogout={onLogout}
          isAuthenticated={isAuthenticated}
          application={application}
          variant={variant}
          params={params}
        />
      );
    case 'Marketing':
      return (
        <MarketingNavbar
          onChat={onChat}
          onLogout={onLogout}
          isAuthenticated={isAuthenticated}
          application={application}
          params={params}
        />
      );
    default:
      return (
        <MarketingNavbar
          onChat={onChat}
          onLogout={onLogout}
          isAuthenticated={isAuthenticated}
          application={application}
          params={params}
        />
      );
  }
};

export default Navbar;
export { fetchApplication, fetchBroker } from './helpers/helpers';
export * from './common/types';
