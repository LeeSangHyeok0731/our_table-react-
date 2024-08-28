import React from 'react';
import styled from 'styled-components';
import MenuTop from './Menutop';

const MenuBar = styled.div`
  height: 130px;
  width:100vw;
  background-color:white;
  x-index: 10;
`

function HeaderMenu(){
    return(
        <MenuBar>
            <MenuTop />
        </MenuBar>
    )
}

export default HeaderMenu;