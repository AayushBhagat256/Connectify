import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  InputGroup,
  InputRightElement,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { Navigate, json, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { useToast } from '@chakra-ui/react'

export default function SimpleCard() {
  const [showPassword, setShowPassword] = useState(false);
  const [email,setEmail] = useState()
  const [pass,setPass] = useState()
  const [token, setToken] = useState([]);
  const nav = useNavigate()
  const toast = useToast()
  // const cookies = new Cookies();

  const diffPage = () => {
    nav('/signup')
  }

  const loginUser = () => {

    let data = JSON.stringify({
      "email": email,
      "password": pass
    });

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:8000/login',
      headers: {
        'Authorization': '',
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        localStorage.setItem("AJWT","Bearer "+JSON.stringify(response.data.token));
        let formattedToken = localStorage.getItem("AJWT").replace(/"/g, '');
        console.log(formattedToken)
        localStorage.setItem("token",formattedToken)
        localStorage.setItem("id",JSON.stringify(response.data.id));
        toast({
          title: "Logged in",
          description: JSON.stringify(response.data.message),
          status: 'success',
          duration: 2500,
          isClosable: true,
        })
        nav('/home')
      })
      .catch((error) => {
        console.log(error);
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
            {/* <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" />
            </FormControl> */}
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} value={pass} onChange={e=>setPass(e.target.value)} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Stack>
                <Link color={'blue.400'} onClick={diffPage}>New user..? Sign Up</Link>
              </Stack>
              <Button
                bg={'blue.400'}
                color={'white'}
                onClick={loginUser}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

