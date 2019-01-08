import * as React from 'react';
import Navbar from '.';
import styled from 'styled-components';
import { bg } from '@lendi-ui/color';

const Wrapper = styled.div`
  ${bg('info.300')};
  height: 5000px;
`;

const HeroPanel = styled.div`
  height: 600px;
  width: 100%;
  ${bg('warn.100')};
`;

const BROKER_DATA = {
  photo: 'https://s3-ap-southeast-2.amazonaws.com/acf-profile-photo/Jack+Chen.jpg',
  fullName: 'Jack Chen',
  phone: '02 9048 5786',
  title: 'Lendi Broker',
};

class NavbarExample extends React.Component {
  onChat = () => {
    console.log('Chat is triggered');
  };

  onLogOut = () => {
    console.log('Log out is clicked');
  };

  render() {
    return (
      <Wrapper>
        <Navbar onChat={this.onChat} broker={BROKER_DATA} onLogout={this.onLogOut} />
        <HeroPanel />
      </Wrapper>
    );
  }
}

export default NavbarExample;
