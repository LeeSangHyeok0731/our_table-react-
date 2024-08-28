import React from 'react';
import styled from 'styled-components';
import AppIcon from './img/appicon.svg'

const AppAds = styled.div`
  background-color: rgb(147, 112, 98);
  height:32px;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:13px;
  font-family:"Noto Sans KR", Helvetica, "Helvetica Neue",Arial,"sans-serif";
  font-optical-sizing: auto;
`

const P = styled.p`
  color:white;
  margin-left:8px;
`

const Span = styled.span`
  color:white;
  margin-left: 4px;
  margin-right: -8px;
  font-weight: 700;
`

function Appbar(){
    return(
        <AppAds>
            <img src={AppIcon} alt="AppIcon" />
            <P>앱 다운받고 </P>
            <Span>할인·혜택소식</Span>
            <P>을 실시간으로 받아보세요!</P>
        </AppAds>
    )
}

export default Appbar;