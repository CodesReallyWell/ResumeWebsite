import React from "react"
import styled from 'styled-components'
import { useForm } from "react-hook-form"
import axios from 'axios'
import Alert from 'react-bootstrap/Alert'

// CSS Stuff
const Contain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const H1Wrap = styled.h1`
  font-size: 3em;
  font-weight: 300;
  letter-spacing: 10px;
  padding: 1em;
`
const Input = styled.input`
  color: white;
  font-size: 1em;
  background: transparent;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid #282828;
  padding: 1em;
  margin: 1em;
  width: 20em;
`;

const TextAreaWrapper = styled.textarea`
  color: white;
  font-size: 1em;
  background: transparent;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid #282828;
  margin: 1em;
  width: 20em;
`

const ButtonBoi =styled.input`
  color: #ffffff;
  font-size: 96%;
  padding: 15px;
  background-color: #282828;
  border: 1px solid #1d2124;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  border-radius: 20px;
  border-bottom: 1px solid #282828;
  -moz-box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
  -webkit-box-shadow: inset 0 1px 0 rgba(255,255,255,0.5);
  cursor: pointer;
  display: block;
  width: 58%;
  box-shadow: 6px 4px 11px 2px rgba(0, 0, 0, 0.5);
  margin: 40px 20%;
  font-weight: bold;
`

const Contact = () => {
  const {register, handleSubmit} = useForm()

  
  
  var onSubmit = data => {
    // make post request with axios
    // request path is /contact
    axios.post('http://82.15.156.40:4000/contact',{
      data: {
        name    : data.Name,
        email   : data.Email,
        message : data.Message
      }
     })
     .then(function (response) {
        console.log(response.status)
      })
     .catch(function (error) {
        console.log(error)
      })

  }

  return (
    <Contain>
      <form onSubmit={handleSubmit(onSubmit)}>
        <H1Wrap>Contact Me</H1Wrap>
        <Input ref={register} name="Name" placeholder="Name" type="text"/>
        <br/>
        <Input ref={register} name="Email"  placeholder="Email" type="Email"/>
        <br/>
        <TextAreaWrapper ref={register} name="Message" placeholder="Message" type="Message" rows="5"/>
        <br/>
        <ButtonBoi type="Submit" placeholder="Submit"/>
      </form>
    </Contain>
  )
}

export default Contact
