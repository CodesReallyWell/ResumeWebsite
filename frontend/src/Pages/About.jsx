import React from "react"
import styled from 'styled-components'
import { Container, Row, Col } from "react-bootstrap"


const ImageWrapper = styled.img`
  display: block;
  height: 23em;
  margin: 0 auto;
  border-radius: 50px 20px;
  box-shadow: 10px 5px 12px black;
`

const TextWrapper = styled.div`
  box-shadow: 10px 5px 12px black;
  border-radius: 50px 20px;
  font-weight: 300;
  padding: 1em;
  top: 4em; 
  margin: auto;
`

const TwoIndentP = styled.p`
  margin-left: 2em
`

const OneIndentP = styled.p`
  margin-left: 1em
`

const WrapperForTextBox = styled.div`
  display: block;
  margin: 0 auto;
  padding: 2em;
`

const AlignThemAll = styled.div`
  padding: 2em;
`

const CenterHeadline1 = styled.h1`
  font-weight: 300;
  text-align: center;
`
const CenterHeadline3 = styled.h5`
  font-weight: 300;
  text-align: center;
`

const About = () => {
  return (
      <Container fluid>
        <Row>
        <div class="col-sm-12 col-md-12 col-lg-5">
          <Col>
            <AlignThemAll>
              <ImageWrapper src={require("../Data/MyFace2.png")} alt="duck"/>
            </AlignThemAll>
          </Col>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-5"> 
          <Col>
            <WrapperForTextBox>
              <TextWrapper>
                <CenterHeadline1>About Me</CenterHeadline1>
                <CenterHeadline3>Entry-Level Software Developer</CenterHeadline3>
                  While at Texas Tech University earning a BS in computer science, 
                  I worked on multiple projects where I was the team lead. In this role, 
                  I assigned individual tasks to each team member to create software solutions.<br/><br/> 

                  At Cilix I am developing scripts that increase automation within the company. So far, I have created more than twelve PowerShell scripts running on more than 240 computers that complete tasks that would have taken weeks in seconds. 
                  As a result, we have been able to catch problems before they happen and reduce the workload on employees.<br/><br/>

                  Outside of work I keep myself busy with personal projects which include teaching myself React and configuring a home server. With no prior experience using HTML, CSS, React or 
                  JavaScript I took it upon myself to learn how to create a website of my own using the React library as my frontend and KOA as my backend. I learned a lot about promises, states, asynchronous functions, and HTTP methods. The website is configured to run a home server
                  in a Debian virtual machine, however it is on its own virtual LAN so it cannot communicate with the home network.<br/><br/>
                   
                  Please feel free to contact me via the contact page and I will get back to you as soon as possible.
              </TextWrapper>
            </WrapperForTextBox>
          </Col>
        </div> 
        </Row>
      </Container>
  )
}

export default About

