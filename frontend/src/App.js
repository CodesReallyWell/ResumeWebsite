import React from 'react'
import './App.css'
import About from './Pages/About'
import Projects from './Pages/Projects'
import MainPage from './Pages/MainPage'
import Contact from './Pages/Contact'
import { BrowserRouter, Route } from 'react-router-dom'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path = "/" render = {() => <MainPage></MainPage>}/>
        <Route path = "/about" render = {() => <About></About>}/>
        <Route path = "/projects" render = {() => <Projects></Projects>}/>
        <Route path = "/contact" render = {() => <Contact></Contact>}/>
      </BrowserRouter>
    </div>

  )
}
export default App;
