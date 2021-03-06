import React from "react"
import { Navbar, Nav, NavDropdown} from 'react-bootstrap'
import styled from 'styled-components'

const NavBarWrap = styled.div`
  Background-color:linear-gradient(#fff, #000);
  border-bottom: 1px solid #000000;
  box-shadow: 0 4px 4px #000000;
`

// if props.isActive is true it returns green
const NavLinkText = styled.span`
  color: ${props => props.isActive && 'red'};
`

const NavTest = styled.span`
  color: blue;
`
/* If I ever want to add a drop down will add this
<Nav className = "mr-auto">
  <NavDropdown title="Projects" id="collasible-nav-dropdown">
      <NavDropdown.Item href="/projectOne">Data Mining</NavDropdown.Item>
      <NavDropdown.Item href="/projectTwo">N/A</NavDropdown.Item>
      <NavDropdown.Item href="/projectThree">N/A</NavDropdown.Item>
  </NavDropdown>
</Nav>
*/

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
      <Navbar expand="sm" className="navbar-dark">
        <Navbar.Brand className="app-nav-link" href="/">Liam Newton</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link className="app-nav-link" href="/about">
              <NavLinkText isActive={isActiveRoute("/about")}>About</NavLinkText>
            </Nav.Link>
            <Nav.Link className="app-nav-link" href="/contact">
              <NavLinkText isActive={isActiveRoute("/contact")}>Contact</NavLinkText>
            </Nav.Link>
            <Nav.Link className="app-nav-link" href="/projectOne">
              <NavLinkText isActive={isActiveRoute("/projectOne")}>Data Mining</NavLinkText>
            </Nav.Link>
          </Nav>
          </Navbar.Collapse>
      </Navbar>
    </NavBarWrap>
  )
}

export default AppNavBar