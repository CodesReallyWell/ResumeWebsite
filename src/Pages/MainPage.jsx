import React from "react"
import { useLocation } from "react-router-dom"
import AppNavBar from "../Components/AppNavBar"
import styled from 'styled-components'

const TextWrapper = styled.div`
  color: white;
  padding: 0em 1em;
  max-width: 800px;
`

const ImgWrapper = styled.div`
  margin: 16em;
  padding: 1em 10vw;
  max-width: 800px;
`

const MainPage = () => {
  const location = useLocation()
  return (
    <div>
        <div>
          <AppNavBar activeRoute={location.pathname}></AppNavBar>
        </div>
    </div>
  )
}

export default MainPage
