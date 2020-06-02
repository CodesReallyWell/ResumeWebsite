import React from "react"
import styled from 'styled-components'
import { Container, Row, Col } from "react-bootstrap"


const ImageWrapper = styled.img`
`

const BoxyBoi = styled.div`
  max-width: 1000px;
  padding: 5px;
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
          <h1>About Me</h1>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum nisi nisi, non facilisis lorem laoreet sit amet. 
          Mauris ultricies ligula in gravida interdum. Praesent id nulla facilisis elit vehicula laoreet. Sed non risus feugiat, imperdiet enim eu,
          sollicitudin nulla. Pellentesque tristique neque ante, ac porttitor lorem mollis ut. In a libero et leo laoreet facilisis. Nunc sagittis 
          tellus nec lacus sollicitudin, quis tempor nisi imperdiet. Phasellus hendrerit nunc at ex lobortis, vulputate vestibulum augue aliquam. Aliquam 
          eleifend gravida arcu. Duis iaculis felis eu dignissim facilisis. Phasellus pellentesque, dui vel malesuada luctus, neque diam sagittis tortor, non auctor 
          sapien urna eget nunc. Aliquam odio eros, auctor a enim eget, tincidunt faucibus orci. Sed sodales rhoncus neque sit amet pretium. Fusce euismod libero at
          urna efficitur luctus. Sed odio eros, lobortis a sapien at, dignissim efficitur eros. 
        </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About

