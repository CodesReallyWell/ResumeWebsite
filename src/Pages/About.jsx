import React from "react"
import styled from 'styled-components'
import AppNavBar from "../Components/AppNavBar";
import { useLocation } from "react-router-dom"


const TextWrapper = styled.div`
  text-align: left;
  margin-top: 5%;
  margin-left: 40%;
  max-width: 1000px;
  border: 1px solid black;
  
`

const About = () => {
  return (
    <div>
      <div>
        <TextWrapper>
            <h1>About Me</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In interdum nisi nisi, non facilisis lorem laoreet sit amet. Mauris ultricies ligula in gravida interdum. Praesent id nulla facilisis elit vehicula laoreet. Sed non risus feugiat, imperdiet enim eu, sollicitudin nulla. Pellentesque tristique neque ante, ac porttitor lorem mollis ut. In a libero et leo laoreet facilisis. Nunc sagittis tellus nec lacus sollicitudin, quis tempor nisi imperdiet. Phasellus hendrerit nunc at ex lobortis, vulputate vestibulum augue aliquam. Aliquam eleifend gravida arcu. Duis iaculis felis eu dignissim facilisis. Phasellus pellentesque, dui vel malesuada luctus, neque diam sagittis tortor, non auctor sapien urna eget nunc. Aliquam odio eros, auctor a enim eget, tincidunt faucibus orci. Sed sodales rhoncus neque sit amet pretium. Fusce euismod libero at urna efficitur luctus. Sed odio eros, lobortis a sapien at, dignissim efficitur eros. 
            </p>
        </TextWrapper>
      </div>
    </div>
  )
}

export default About

