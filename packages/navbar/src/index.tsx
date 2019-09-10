import * as React from 'react';
import ApplicationNavbar from './Application/index';
import { MarketingNavbar } from './Marketing/index';
import { SEMNavbar } from './SEM/index';
import { Application, Broker } from './common/types';
import { LUIGlobalProps } from '@lendi-ui/utils';
import { useSession } from '@lendi/lala-react';

export type NavbarType = 'SEM' | 'Application' | 'Marketing';
export interface ApplicationNavbarProps extends LUIGlobalProps {
  type?: NavbarType;
  isAuthenticated?: boolean;
  application?: Application;
  broker?: Broker;
  onChat?: () => void;
  onLogout?: () => void;
  variant?: 'transparent' | 'white';
  params?: string;
}

const Navbar = ({
  type = 'Application',
  isAuthenticated,
  application = {},
  broker,
  onChat,
  onLogout,
  variant,
  params,
}: ApplicationNavbarProps) => {
  const { logout } = useSession();

  const NavbarLogout = () => {
    if (!onLogout) {
      logout(); // this is default logout from lala-react.
    } else {
      onLogout();
    }
  };

  switch (type) {
    case 'Application':
      return (
        <ApplicationNavbar
          onChat={onChat}
          broker={broker}
          onLogout={NavbarLogout}
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
          onLogout={NavbarLogout}
          isAuthenticated={isAuthenticated}
          application={application}
          params={params}
        />
      );
    case 'SEM':
      return (
        <SEMNavbar
          onChat={onChat}
          onLogout={NavbarLogout}
          isAuthenticated={isAuthenticated}
          application={application}
          params={params}
        />
      );
    default:
      return (
        <MarketingNavbar
          onChat={onChat}
          onLogout={NavbarLogout}
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
