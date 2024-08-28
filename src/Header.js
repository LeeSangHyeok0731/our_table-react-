import React from 'react';
import styled from 'styled-components';
import Appbar from './AppAds';
import HeaderMenu from './HeaderMenu';

const HeaderContainer = styled.div`
  width: 100vw;
  height: 162px;
  border-bottom:1px solid black;
`;


function Header() {
  return (
  <HeaderContainer>
    <Appbar />
    <HeaderMenu />
  </HeaderContainer>
  );
}

export default Header;
