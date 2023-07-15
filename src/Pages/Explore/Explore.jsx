import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
  SimpleGrid,
} from '@chakra-ui/react';
import User from './User';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function SocialProfileWithImage() {
  const [friends, setFriends] = useState([])
  const getList = () => {

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `http://localhost:8000/userfri/${localStorage.getItem('id')}`,
      headers: {
        'Authorization': `${localStorage.getItem('token')}`
      }
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setFriends(response.data.users)
      })
      .catch((error) => {
        console.log(error);
      });

  }
  useEffect(
    () => {
      getList();
    }, []
  )
  const link = 'http://localhost:8000/'
  return (
    <>
      <Heading ml={'4'}>Discover Friends...</Heading>

      <Center py={6}>
        <SimpleGrid gap={'5'} columns={{ base: 1, md: 4 }}>
          {friends.map(map => {
            return (
              <User name={map.userName} image={link+map.picturepath} />

            )
          })}

        </SimpleGrid>
      </Center>

    </>
  );
}