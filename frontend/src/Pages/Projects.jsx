import React from "react"
import { useLocation } from "react-router-dom"
import AppNavBar from "../Components/AppNavBar"
import styled from 'styled-components'

const TextWrapper = styled.div`
  text-align: center;
  margin: auto;
  max-width: 800px;
`

const Link = styled.a`
  color: black;
`

const Projects = () => {
  return (
    <TextWrapper>
      <Link href="https://github.com/CodesReallyWell/CryptoProject">Data Mining Project</Link>
      <Link href="https://github.com/CodesReallyWell/ResumeWebsite">Website Source Code</Link>
    </TextWrapper>
  )
}

export default Projects
