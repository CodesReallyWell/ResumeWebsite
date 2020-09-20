import React, { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import AppNavBar from "../Components/AppNavBar"
import styled from 'styled-components'

// For fancy main page text
import TextTransition, { presets } from "react-text-transition";


const Container = styled.div`
  align-items: center;
  justify-content: center;
  flex-direction: column;
  display: flex;
`

const TextWrapper = styled.div`
  top: 15vh;
  font-size: 3em;
  text-shadow: 2px 2px #282828;
  text-align: center;
  font-weight: 300;
  letter-spacing: 10px;
  padding: 1em;
`

const TextBox = styled.div`
  box-shadow: 10px 5px 12px black;
  border-radius: 50px 20px;
  font-weight: 300;
  padding: 1em;
  top: 16vh; 
  margin: auto;
  max-width: 52em;
`
const TwoIndentP = styled.p`
  margin-left: 2em
`

const LineThing = styled.hr`
  border-top: 2px solid #282828;
  box-shadow: 2px 1px 4px black;
`

const OneIndentP = styled.p`
  margin-left: 1em
`
const Link = styled.a`
 color: white;
`

const DownloadButton = styled.button`
  color: #ffffff;
  font-size: 96%;
  padding: 15px;
  background-color: ${props => props.buttonColor};
  border: 2px solid ${props => props.borderColor};
  cursor: pointer;
  box-shadow: 6px 4px 11px 2px rgba(0, 0, 0, 0.5);
  font-weight: bold;
  border-radius: 20px;
  width: 60%;
  margin: 40px 20%;
`

const GithubLinkImgWrap=styled.img`
  width: 1.3em;
  padding: .3em;
`

function FancyText(){

  const HEADLINETEXT = [  
    " Codes",
    " Develops",
    " Programs"
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

  if(index >  2){
    setIndex(index => 0)
  }


  return <TextTransition
          text={ HEADLINETEXT[index % HEADLINETEXT.length] }
          spring={  presets.gentle  }
          overflow
          inline
          />

}

const ButtonHover = (props) => {
  const[hovered, setHovered] = useState(false)
  if(hovered){
    return <DownloadButton buttonColor='#282828' onMouseOut={() => setHovered(false)} borderColor="green">Download Resume</DownloadButton>
  }else{
    return <DownloadButton buttonColor='#282828' onMouseOver={() => setHovered(true)} borderColor="#282828">Download Resume</DownloadButton>
  }
}

const MainPage = () => {
  const location = useLocation()
  const url = 'https://drive.google.com/uc?export=download&id=1R8a8BvlBCrJxk_-6hl2wOk_BRqdby1lj'

  if(location.pathname === "/"){
    return (
      <div>
        <AppNavBar activeRoute={location.pathname}/>
        <Container>
            <TextWrapper>
              Liam Newton <FancyText/>
            </TextWrapper>
            <TextBox>
              <h2>Software Developer</h2>
              <LineThing/>
              <TwoIndentP>
                Creative software developer. Graduate of Texas Tech University. Motivated to identify innovative software automation solutions both independently 
                and collaboratively. Strong analytical skills. Seeking to provide value to your company by leveraging the skills acquired at university.
              </TwoIndentP>
              <h2>Professional Experience</h2>
              <LineThing/>
              <h4>Mar 2020 - Present	Technical Support Analyst - Cilix, UK</h4>
              <TwoIndentP>
                Secured a position at Cilix, UK, to satisfy work abroad requirement in 2018. Upon graduation, Cilix invited me to return as my goal was to travel prior to finding a permanent placement. Due to the onset of COVID my plans were curtailed.<br/>
                <b>Project:</b> Increased the stability of the company’s 240 client computers by writing 12 PowerShell scripts to automate manual updates. This task would have normally taken 3-man weeks and was too costly to perform regularly so Cilix only upgraded as problems occurred, at the expense of customer satisfaction.
              </TwoIndentP>
              <br/>

              <h2>Education</h2>
              <LineThing/>
              <h4>Bachelor of Science in Computer Science</h4>
              <OneIndentP>
                Texas Tech University, Lubbock, TX<br/>
                2015 - December 2019<br/>
              </OneIndentP>
              <h4>Assosciate of Science in Computer Science</h4>
              <OneIndentP>
                Austin Community College, Austin, TX<br/>
                Awarded September 2020
              </OneIndentP>

              <h4>Project: Carbon Monoxide Poisoning Prevention System (C.O.P.P.S) 2019 
                <a href="https://github.com/CodesReallyWell/BTComms">
                  <GithubLinkImgWrap src="https://logodix.com/logo/64439.png"/>
                </a>
              </h4>
              <OneIndentP>
                  Designed an application to prevent deaths by alerting vehicle occupants of high carbon monoxide concentrations. 
                  Initiated the project idea then led a small team to design, build, and test a mobile application detecting carbon 
                  monoxide emissions. I connected the detector to the main app via Bluetooth.
              </OneIndentP>
              <h4> Project: Social Media Influence on Ethereum Value 2018
                <a href="https://github.com/CodesReallyWell/CryptoProject">
                  <GithubLinkImgWrap src="https://logodix.com/logo/64439.png"/>
                </a>
              </h4>
              <OneIndentP>
              Determined evidence of correlation between the sentiment on Reddit and the value of cryptocurrency Ethereum, to predict changes in value.
              Led a team to research the connection. Wrote a script in R, to perform the sentiment analysis, leveraging Naïve Bayes, and Granger 
              causality concepts. The data was collected using SQL from Google Big Query. The result showed sufficient evidence to support a
              correlation between Reddit sentiment and the value of Ethereum.
              <Link href='/projectOne'> <b>Read More</b></Link>
              </OneIndentP>

              <h2>Extra-Curricular</h2>
              <LineThing/>
              <h4>This Website
                <a href="https://github.com/CodesReallyWell/ResumeWebsite">
                  <GithubLinkImgWrap src="https://logodix.com/logo/64439.png"/>
                </a>
              </h4>
              <OneIndentP>
                Built, created, and hosted this React website with no prior experience using React, CSS, HTML or JS.
              </OneIndentP>
              <h4>Home Server</h4>
              <OneIndentP>
                Configured a server running VMWare ESXI, that hosts my website as well as manages my home network.
              </OneIndentP>
              <h4>Travel</h4><br/>
              <h2>Citizenship</h2>
              <LineThing/>
              <h4>Dual: British, United States</h4>
              <a href={url}>
                <ButtonHover/>
              </a>
            </TextBox>
        </Container>
      </div>
      );
  }else{
    return(<AppNavBar activeRoute={location.pathname}/>)
  }
}

export default MainPage
