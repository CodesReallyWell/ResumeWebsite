import React from "react"
import { useLocation } from "react-router-dom"
import AppNavBar from "../Components/AppNavBar"
import styled from 'styled-components'

// For getting current heigh/width of browser windows
import { useState, useEffect } from 'react';

// For fancy main page text
import TextTransition, { presets } from "react-text-transition";


const Container = styled.div`
  
`

const ImgWrapper = styled.img`
  vertical-align: middle;
  width: 100%;
  overflow: hidden;
`

const ImgWrapper2 = styled.img`
  vertical-align: middle;
  width: 100%;
  overflow: hidden;
`

const TextWrapper = styled.p`
  position: absolute;
  top: 40vh;
  font-weight: bold;
  font-size: 400%;
`

function ScreenHeight(){
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
  return windowSize
  
}


//<ImgWrapper2 src={require("../Data/HSPTG.jpg")} alt="duck"/>
function FancyText(){

  const HEADLINETEXT = [  
    "Liam Newton",
    "He kinda writes code"
    ]
  
  // JS ew states
  const [index, setIndex] = React.useState(0);
  
  // must clear interval at end of React.useEffect otherwise you get a massive memory leak
  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      5000 // every 5 seconds
    )
    return () => clearInterval(intervalId);
  })

  if(index >  1){
    setIndex(index => 0)
  }


  return <TextTransition
          text={ HEADLINETEXT[index % HEADLINETEXT.length] }
          springConfig={ presets.slow }
          />

}

//Current resolution: {windowSize.height-60}x{windowSize.width}&#10;
//              Aspect Ratio: {windowSize.width/(windowSize.height-60)}


const MainPage = () => {
  const location = useLocation()
  const windowSize = ScreenHeight() 

  if(location.pathname == "/"){
    if((windowSize.width/(windowSize.height-60)) < (6637/3787)){
      return (
        <Container>
          <AppNavBar activeRoute={location.pathname}/>
          <ImgWrapper2 src={require("../Data/HSPTG 1.jpg")} alt="duck"/>
            <TextWrapper>
              <FancyText/>
            </TextWrapper>
        </Container>
        );
    }else{
      return (
        <Container>
          <AppNavBar activeRoute={location.pathname}/>
          <ImgWrapper src={require("../Data/HSPTG.jpg")} alt="duck"/>
          <TextWrapper>
            <FancyText/>
          </TextWrapper>
        </Container>
        );
    }
  }else{
    return(<AppNavBar activeRoute={location.pathname}/>)
  }
}

export default MainPage
