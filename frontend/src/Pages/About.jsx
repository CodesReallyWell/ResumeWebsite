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
            </WrapperForTextBox>
          </Col>
        </div> 
        </Row>
      </Container>
  )
}

export default About

