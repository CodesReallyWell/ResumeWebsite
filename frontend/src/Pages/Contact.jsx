import React from "react"
import styled from 'styled-components'
import { useForm } from "react-hook-form"
import Telegram from 'telegram-send-message'

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
`
const Input = styled.input.attrs(props => ({
  // we can define static props

  // or we can define dynamic ones
  size: props.size || "1em",
}))`
  color: white;
  font-size: 1em;
  background: transparent;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid #736f73;


  /* here we use the dynamically computed prop */
  margin: 1em;
  padding: 1em;
`;

const TextAreaWrapper = styled.textarea`
  color: white;
  font-size: 1em;
  background: transparent;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid #736f73;

  margin: 1em;
`

Telegram.setToken("")
Telegram.setRecipient('')

const Contact = () => {
  const {register, handleSubmit} = useForm()
  
  const onSubmit = data => {
    var message = ("Name: " + data.Name +
                  "\
                  Email: " + data.Email +
                  "\
                  Message: " + data.Message)
    console.log(message)
    Telegram.setMessage(message)
    Telegram.send()
  }

  return (
    <Contain>
      <form onSubmit={handleSubmit(onSubmit)}>
        <H1Wrap>Under Construction</H1Wrap>
        <Input ref={register} name="Name" placeholder="Name" type="text"/>
        <br/>
        <Input ref={register} name="Email"  placeholder="Email" type="Email"/>
        <br/>
        <TextAreaWrapper ref={register} name="Message" placeholder="Message" type="Message" rows="5"/>
        <br/>
        <Input type="Submit"/>
      </form>
    </Contain>
  )
}

export default Contact
