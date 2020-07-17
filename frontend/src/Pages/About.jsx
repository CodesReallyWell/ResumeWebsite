import React from "react"
import styled from 'styled-components'
import { Container, Row, Col } from "react-bootstrap"


const ImageWrapper = styled.img`
  position: relative;
  height: 30em;
  top: 4em;
`

const TextWrapper = styled.div`
  position: relative;
  box-shadow: 10px 5px 12px black;
  padding: 1.5em;
  top: 4em;
  bottom: 15em; 
  margin: auto;
`

const TwoIndentP = styled.p`
  margin-left: 2em
`

const OneIndentP = styled.p`
  margin-left: 1em
`

const About = () => {
  return (
    <div>
      <Container>
        <Row lg={8}>
        <Col sm={1}/>
        <Col>
          <ImageWrapper src={require("../Data/MyFace1.png")} alt="duck"/>
        </Col>
        <Col>
        
          <TextWrapper>
            <h1>About Me</h1>
            <OneIndentP>
              I am a passionate programmer from Austin, Texas with experience in JavaScript, HTML, PowerShell and more!<br/>
              <br/>
              Bear with the mess around here; the website is currently being built.
            </OneIndentP>
            <br/>
            <h1>Education</h1>
            <OneIndentP>
              Bachelor of Science in Computer Science<br/>
              <TwoIndentP>
                Texas Tech University, Lubbock, TX<br/>
                Graduation date: December 2019
              </TwoIndentP>
            </OneIndentP>
          </TextWrapper>
        </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About

