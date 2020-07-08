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
  top: 4em;
  bottom: 15em; 
`

const About = () => {
  return (
    <div>
      <Container>
        <Row lg={8}>
        <Col lg={8}>
          <ImageWrapper src={require("../Data/MyFace1.png")} alt="duck"/>
        </Col>
        <Col>
          <TextWrapper>
            <h1>About Me</h1>
            I am a passionate programmer who is always searching to learn new things.
            Bear with the mess around here; the website is currently being built.
          </TextWrapper>
        </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About

