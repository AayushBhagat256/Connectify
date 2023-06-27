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

export default function SocialProfileWithImage() {
  return (
    <>
    <Heading ml={'4'}>Discover Friends...</Heading>
    <Center py={6}>
        <SimpleGrid gap={'5'} columns={{ base: 1, md: 4 }}>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>
        <User/>

        </SimpleGrid>
    </Center>
    </>
  );
}