import React from "react"
import { Navbar, Nav} from 'react-bootstrap'
import styled from 'styled-components'

const NavBarWrap = styled.div`
  border-bottom: 1px solid #ccc;
  box-shadow: 0 4px 4px #ddd;
  background: #f4f4f4;
`

// if props.isActive is true it returns green
const NavLinkText = styled.span`
  color: ${props => props.isActive && 'red'};
`

// isActive :: String -> String -> Boolean
// isActive is a function that takes a string returns a function
// that takes a string that returns a boolean
const isActive = (activeRoute) => (route) => 
  activeRoute === route


const AppNavBar = (props) => {
  // Object decompisition 
  const { activeRoute } = props
  const isActiveRoute = isActive(activeRoute)

  return (
    <NavBarWrap>
      <Navbar expand="lg" >
        <Navbar.Brand href="/">Liam Newton</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link className="app-nav-link" href="/about">
              <NavLinkText isActive={isActiveRoute("/about")}>About</NavLinkText>
            </Nav.Link>
            <Nav.Link className="app-nav-link" href="/projects">
              <NavLinkText isActive={isActiveRoute("/projects")}>Projects</NavLinkText>
            </Nav.Link>
            <Nav.Link className="app-nav-link" href="/contact">
              <NavLinkText isActive={isActiveRoute("/contact")}>Contact</NavLinkText>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </NavBarWrap>
  )
}

export default AppNavBar