import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  import axios from 'axios';
  
  export default function SimpleCard() {
    const [email,setEmail] = useState()
    const [pass,setPass] = useState()
    const nav = useNavigate();
    const navigateToRegister=()=>{
      nav('/register')
    }
    //Integrating backend
    const loginhit=()=>{
       //const axios = require('axios');
  let data = JSON.stringify({
    // "email": "Dummy4@test.com",
    // "password": "pass@123"
    "email": email,
    "password": pass
  });
  
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: 'http://localhost:4000/user/login',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };
  
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
    alert("login success")
    localStorage.setItem("token",response.data.Token);
    localStorage.setItem("id",response.data.id);
    localStorage.setItem('email',response.data.email);
    localStorage.setItem('username',response.data.name);
    nav('/home')
  })
  .catch((error) => {
    console.log(error);
    alert("login failed")
  });
    }
   
  
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" value={email} onChange={e=>setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" value={pass} onChange={e=>setPass(e.target.value)} />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  onClick={loginhit}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign in
                </Button>
              </Stack>
            </Stack>
            <br />
            <Box textAlign={'center'} onClick={navigateToRegister}><Link color={'blue.400'} textAlign={'center'}>New Here..? Let's Register</Link></Box>
          </Box>
        </Stack>
      </Flex>
    );
  }
  