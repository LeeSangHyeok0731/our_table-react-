import React from 'react';
import styled from 'styled-components';
import maintitle from './img/main_title.svg'

const Top = styled.div`
  margin: 0 247.6px;
  width:1024px;
  height:56px;  
  padding-top:8px;
  padding-right:14px;
  display:flex;
  align-items:center;
`

function MenuTop(){
    return(
        <Top>
            <img src={maintitle} alt="maintitle" />
        </Top>
    )
}

export default MenuTop