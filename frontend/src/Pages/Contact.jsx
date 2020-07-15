import React, { useState } from "react"
import styled from 'styled-components'
import { useForm } from "react-hook-form"
import axios from 'axios'
import Alert from 'react-bootstrap/Alert'

// CSS Stuff
const Contain = styled.div`
  display: flex;
  margin: 0 auto;
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

const ButtonBoi=styled.input`
  color: #ffffff;
  font-size: 96%;
  padding: 15px;
  background-color: ${props => props.buttonColor};
  border: 1px solid #1d2124;
  border-radius: 20px;
  border-bottom: 1px solid #282828;
  cursor: pointer;
  width: 58%;
  box-shadow: 6px 4px 11px 2px rgba(0, 0, 0, 0.5);
  margin: 40px 20%;
  font-weight: bold;
`

const AlertingWrapper=styled.div`
  font-size: 1em;
  font-weight: bold;
  width: 20em;
  text-align: center;
  background: #28282850;
  border: 2px solid ${props => props.inputColor};
  border-radius: 20px;
  box-shadow: 6px 4px 11px 2px rgba(0, 0, 0, 0.5);
  margin: auto;
`

const Contact = () => {
  const {register, handleSubmit} = useForm()

  // For HTTP status code
  const [msg, setMessage] = useState(0)

  // For error code
  const [errThing, setError] = useState("")
  
  const onSubmit = data => {
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
        setMessage(response.status)
      })
     .catch(function (error) {
        setError(error)
      })

  }

  const SubmitStatus = (props) => {
    const [show, setShow] = useState(true)
    
    if(props.statusMessage == 200 && show){
      return (
              <AlertingWrapper inputColor='green'>
                <Alert onClose={() => setShow(false)} dismissible>
                  <Alert.Heading>Submit Success!</Alert.Heading>
                </Alert>
              </AlertingWrapper>)
    }else if (props.errMsg.message != null && show){
      return (
            <AlertingWrapper inputColor='red'>
              <Alert onClose={() => setShow(false)} dismissible>
                <Alert.Heading>Uh Oh, It Broke</Alert.Heading>
                <p>{props.errMsg.message}</p>
              </Alert>
            </AlertingWrapper>)
    }else{
      return null
    }
  }

  // For changing button color on hover :)
  // on mouse out sets hovered to false so it always goes to original color
  const ChangeButton = () =>{
    const[hovered, setHovered] = useState(false)

    if(hovered){
      return <ButtonBoi buttonColor='blue' onMouseOver={() => setHovered(false)} onMouseOut={() => setHovered(false)} type="Submit" placeholder="Submit"/>
    }else{
      return <ButtonBoi buttonColor='#282828' onMouseOver={() => setHovered(true)} onMouseOut={() => setHovered(false)} type="Submit" placeholder="Submit"/>
    }
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
        <ChangeButton/>
        <br/>
        <SubmitStatus statusMessage={msg} errMsg={errThing}/>
      </form>
    </Contain>
  )
}

export default Contact
