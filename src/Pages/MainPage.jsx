import React from "react"
import { useLocation } from "react-router-dom"
import AppNavBar from "../Components/AppNavBar"
import styled from 'styled-components'
import { useState, useEffect } from 'react';


const Container = styled.div`
  position: relative;
`

const ImgWrapper = styled.img`
  position: relative;
  width: 100%;
`
const TextWrapper = styled.div`
  postion: relative;
  text-align: center;
`

function TestFunction(){
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(()=>{
    if (!isClient) {
      return false;
    }
  
    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);

  });
  return <div>{windowSize.height}</div>
  
}


//<ImgWrapper src={require("../Data/HSPTG.jpg")} alt="duck"/>

const MainPage = () => {
  const location = useLocation()
  if(location.pathname == "/"){
    return (
      <Container>
        <AppNavBar activeRoute={location.pathname}></AppNavBar>
        <TextWrapper>
           <TestFunction/>
        </TextWrapper>
      </Container>
      );
  }else{
    return(<AppNavBar activeRoute={location.pathname}></AppNavBar>)
  }
  
}

export default MainPage
