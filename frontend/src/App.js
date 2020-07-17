import React from 'react'
import './App.css'
import About from './Pages/About'
import ProjectOne from './Pages/Project1'
import MainPage from './Pages/MainPage'
import Contact from './Pages/Contact'
import { BrowserRouter, Route } from 'react-router-dom'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path = "/" render = {() => <MainPage></MainPage>}/>
        <Route path = "/about" render = {() => <About></About>}/>
        <Route path = "/project/1" render = {() => <ProjectOne></ProjectOne>}/>
        <Route path = "/contact" render = {() => <Contact></Contact>}/>
      </BrowserRouter>
    </div>

  )
}
export default App;
