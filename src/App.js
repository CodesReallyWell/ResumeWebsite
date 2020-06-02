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
      <div>
        <BrowserRouter>
          <Route path = "/ResumeWebsite" render = {() => <MainPage></MainPage>}/>
          <Route path = "/ResumeWebsite/about" render = {() => <About></About>}/>
          <Route path = "/ResumeWebsite/projects" render = {() => <Projects></Projects>}/>
          <Route path = "/ResumeWebsite/contact" render = {() => <Contact></Contact>}/>
        </BrowserRouter>
      </div>
    </div>
  )
}
export default App;
