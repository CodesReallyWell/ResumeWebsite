import React from "react"
import { useLocation } from "react-router-dom"
import AppNavBar from "../Components/AppNavBar"
import styled from 'styled-components'

const TextWrapper = styled.div`
  margin: auto;
  max-width: 1000px;
`

const Link = styled.a`
`

const HeaderWrap = styled.h1`
  padding: 1em;
  text-align: center;
  font-weight: bold;
  text-shadow: 2px 2px #282828;
`

const PWrap = styled.p`
  padding: 2em;
`

const HeaderWrapTwo = styled.h2`
  padding: 1em;
`

const ProjectOne = () => {
  return (
    <TextWrapper>
      <HeaderWrap>Social Media Influence on Ethereum Value</HeaderWrap>
      <PWrap>
        <h2>Abstract</h2>
        With Cryptocurrencies high return and volatility it is an important topic of discussion on forums like Reddit. In this social media study, we will use sentiment analysis, Granger causality, and Naive Bayes to determine a relation between positive comments and Cryptocurrency value. Since there are so many types of Cryptocurrencies, we have decided to focus on one, Ethereum. Ethereum is an open-source, public, blockchain-based distributed computing platform and operating system. 
      </PWrap>
    </TextWrapper>
  )
}

export default ProjectOne
