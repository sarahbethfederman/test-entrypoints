import * as React from 'react';
import Navbar from '../../index';
import styled from 'styled-components';
import { bg } from '@lendi-ui/color';
import { usePasswordlessAuthentication, PasswordlessAuthenticationStatus } from '@lendi/lala-react';
import { Button } from '@lendi-ui/button';
import { Input } from '@lendi-ui/text-input';
import { my } from '@lendi-ui/spacing';
import { Body } from '@lendi-ui/typography';

const NavBarWrapper = styled.div`
  ${bg('info.300')};
  height: 5000px;
  overflow: auto;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
`;

export const FieldWrapper = styled(Input)`
  ${my('sm')}
`;

export const ButtonWrapper = styled(Button)`
  ${my('sm')}
`;

const NavbarLalaAuth = () => {
  const { send, verify, status } = usePasswordlessAuthentication();
  const [phone, setPhone] = React.useState<string>('');
  const [input, setInput] = React.useState<string>('+614');
  const [code, setCode] = React.useState<string>('');
  switch (status) {
    case PasswordlessAuthenticationStatus.Sending:
    case PasswordlessAuthenticationStatus.Verifying:
      return (
        <Wrapper>
          <Body size="lg">Loading.......</Body>
        </Wrapper>
      );
    default:
      return (
        <Wrapper>
          <FieldWrapper
            value={input}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
            isFullWidth
            placeholder="Your phone no."
          />
          <ButtonWrapper
            variant="primary"
            onClick={() => {
              const newPhoneNumber = input;
              setPhone(newPhoneNumber);
              send(newPhoneNumber);
            }}
          >
            Send code
          </ButtonWrapper>
        </Wrapper>
      );
    case PasswordlessAuthenticationStatus.Sent:
      return (
        <Wrapper>
          <FieldWrapper
            value={code}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCode(e.target.value)}
            isFullWidth
            placeholder="Your 6 digit code"
          />
          <ButtonWrapper
            variant="primary"
            onClick={() => {
              const newCode = code;
              verify({ phone, code: newCode, email: 'test@lendi.com.au' });
            }}
          >
            Verify code
          </ButtonWrapper>
        </Wrapper>
      );
    case PasswordlessAuthenticationStatus.Verified:
      return (
        <NavBarWrapper>
          <Navbar isAuthenticated={PasswordlessAuthenticationStatus.Verified === 'verified'} />
        </NavBarWrapper>
      );
    case PasswordlessAuthenticationStatus.Denied:
      return <Body size="lg">Denied - Refresh page to try again!</Body>;
    case PasswordlessAuthenticationStatus.Errored:
      return <Body size="lg"> Errored!!!!! 😚 Refresh page to try again!</Body>;
  }
};

export default NavbarLalaAuth;
