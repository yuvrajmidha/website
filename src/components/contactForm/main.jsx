import React, { useState } from 'react';
import {
  FormControl, Input, Button, Textarea, Spinner, Box, Flex
} from "@chakra-ui/react";

import Toast from '../Toast/main';
import axios from "axios";
function ContactForm(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  let form = {
    name: name,
    email: email,
    message: message,
    contactNumber: phone,
    subject: subject
  }
  const [isLoading, loadingState] = useState(false);
  const [formResponse, setResponse] = useState('');
  const onChange = (event) => {
    const target = event.target
    const fieldname = target.name
    const value = target.value
    switch (fieldname) {
      case 'name':
        setName(value);
        break;

      case 'message':
        setMessage(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      case 'email':
        setEmail(value);
        break;

      case 'subject':
        setSubject(value);
        break;

      default:
        break;
    }
  }
  const refreshForm = (res) => {
    loadingState(false)
    console.log(res);
    setResponse(res);
    setResponse('');
    if (res.status == 200) {
      setTimeout(() => {
        setName('');
        setEmail('');
        setMessage('');
        setPhone('');
        setSubject('');
      }, 1000);
    }
  }
  const onSubmit = (event) => {
    event.preventDefault()
    loadingState(true);
    axios.post('/api/contact/submit', form)
      .then((response) => refreshForm(response), (error) => refreshForm(error))
  }
  return (
    <Box>
      <form onSubmit={onSubmit}>
        <input type="hidden" name="_redirect" value="false" />
        <Flex mx="-8px" wrap="wrap">
          <FormControl px={2} width={"100%"} isRequired>
            <Input
              placeholder="Name"
              
              borderColor={"gray.400"}
              _placeholder={{color: "gray.400"}}
              type="text"
              p={6}
              name="name"
              value={name}
              onChange={onChange}
            />
          </FormControl>

          <FormControl px={2} width={["100%", "100%", "50%"]} mt={4} isRequired>
            <Input
              p={6}
              placeholder="Email"
              type="email"
              
              borderColor={"gray.400"}
              _placeholder={{color: "gray.400"}}
              name="email"
              value={email}
              onChange={onChange}
            />
          </FormControl>

          <FormControl px={2} width={["100%", "100%", "50%"]} mt={4} isRequired>
            <Input
              p={6}
              placeholder="Phone Number"
              type="tel"
              
              borderColor={"gray.400"}
              _placeholder={{color: "gray.400"}}
              pattern="[0-9]{10}"
              name="phone"
              value={phone}
              onChange={onChange}
            />
          </FormControl>

          <FormControl px={2} width={"100%"} mt={4}>
            <Input
              p={6}
              placeholder="Subject"
              name="subject"
              
              borderColor={"gray.400"}
              _placeholder={{color: "gray.400"}}
              value={subject}
              onChange={onChange}
            />
          </FormControl>
          <FormControl px={2} width={"100%"} mt={4} isRequired>
            <Textarea
              p={6}
              placeholder="Message"
              height="220px"
              size="lg"
              name="message"
              
              borderColor={"gray.400"}
              _placeholder={{color: "gray.400"}}
              value={message}
              onChange={onChange}
              resize={"vertical"}
            />
          </FormControl>
          <FormControl px={2} mt={4} display="flex" justifyContent={"end"} width={"100%"}>
            <Button
              type="submit"
              variant='outline'
              size="lg"
              py={6}
              ml="auto"
              colorScheme="brand"
            >Submit{isLoading && <Spinner
              thickness="4px"
              speed="1s"
              emptyColor="gray.200"
              color="blue.500"
              size="sm"
            />}
            </Button>
          </FormControl>
        </Flex>
      </form>
      {formResponse && <Toast response={formResponse} />}
    </Box>
  )
}
export default ContactForm;