import * as React from 'react';
import NavbarLeft from './NavbarLeft';
import NavbarRight from './NavbarRight';
import * as Sticky from 'react-stickynode';
import { NavbarBaseProps, NavbarCompoundComponent } from '../types';
import { ChildrenWrapper } from '../index.style';
import NavbarBaseContext from '../context/NavbarContext';

const NavbarBase: React.FunctionComponent<NavbarBaseProps> & NavbarCompoundComponent = ({
  children,
  isTransparent: useTransparent = false,
  className,
}) => {
  const [isTransparent, setIsTransparent] = React.useState<boolean>(useTransparent);

  React.useEffect(() => {
    setIsTransparent(useTransparent);
  }, [useTransparent]);

  const handleStickyState = ({ status }: Sticky.Status) => {
    if (useTransparent) {
      if (status === Sticky.STATUS_FIXED) {
        setIsTransparent(false);
      } else {
        setIsTransparent(true);
      }
    }
  };
  return (
    <nav aria-label="Main navigation">
      <NavbarBaseContext.Provider value={{ isTransparent }}>
        <Sticky innerZ={3} onStateChange={handleStickyState}>
          <ChildrenWrapper isTransparent={isTransparent} className={className}>
            {children}
          </ChildrenWrapper>
        </Sticky>
      </NavbarBaseContext.Provider>
    </nav>
  );
};

NavbarBase.Left = NavbarLeft;
NavbarBase.Right = NavbarRight;

export default NavbarBase;
