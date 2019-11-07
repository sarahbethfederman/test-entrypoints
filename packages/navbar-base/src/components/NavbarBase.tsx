import * as React from 'react';
import NavbarLeft from './NavbarLeft';
import NavbarRight from './NavbarRight';
import * as Sticky from 'react-stickynode';
import { NavbarBaseProps, NavbarCompoundComponent } from '../types';
import { NavbarWrapper, ChildrenWrapper } from '../index.style';
import NavbarBaseContext from '../context/NavbarContext';

const NavbarBase: React.FunctionComponent<NavbarBaseProps> & NavbarCompoundComponent = ({
  children,
  isTransparent: useTransparent = false,
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
    <NavbarWrapper>
      <NavbarBaseContext.Provider value={{ isTransparent }}>
        <Sticky innerZ={1} onStateChange={handleStickyState}>
          <ChildrenWrapper isTransparent={isTransparent}>{children}</ChildrenWrapper>
        </Sticky>
      </NavbarBaseContext.Provider>
    </NavbarWrapper>
  );
};

NavbarBase.Left = NavbarLeft;
NavbarBase.Right = NavbarRight;

export default NavbarBase;
