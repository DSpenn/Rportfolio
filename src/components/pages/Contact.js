/* eslint-disable no-unused-vars */
import React from 'react';    
import Button from 'react-bootstrap/Button'
import {FormControl, FormLabel} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';

function Contact() {

  function handleMouseLeaveName(e) {
    if (!e.target.value)
     alert('Name is required');
   }

   function handleMouseLeaveEmail(e) {
    if (!e.target.value)
     alert('Email is required');

    const email = /^(([^<>()[\]\\.,;:\s@']+(\.[^<>()[\]\\.,;:\s@']+)*)|('.+'))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //console.log(email.test(String(e.target.value).toLowerCase()));
    if(!email.test(String(e.target.value.toLowerCase())))
    alert('Email is not valid');
    }


  return (
    <Form className='Contact'>
    <div className='mb-3'>
    <FormLabel htmlFor='inputName'>Name</FormLabel>
      <Form.Control type='text' id='inputName' placeholder='Name' onMouseLeave={handleMouseLeaveName}></Form.Control>
      <FormLabel htmlFor='inputEmail' >Email address</FormLabel>
      <Form.Control type='email' id='inputEmail' placeholder='Email' onMouseLeave={handleMouseLeaveEmail}></Form.Control>
      <Form.Text>We'll never share your email with anyone.</Form.Text>
      <br />
      <Button className='btn btn-secondary btn-sm'>Submit</Button>
    </div>
  </Form>
  );
}

export default Contact;