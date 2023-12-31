// import Image from 'next/image';
import {
  Box,
  Center,
  Heading,
  Image,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

export default function BlogPostWithImage(props) {
  return (
    <Center py={6}>
      <Box
        maxW={'445px'}
        w={'full'}
        // bg={useColorModeValue('white', 'gray.900')}
        // bg={useColorModeValue('gray.50', 'gray.800')}
        bg={useColorModeValue('white', 'gray.700')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Box
          h={'auto'}
          bg={'gray.100'}
          mt={-6}
          mx={-6}
          mb={6}
          pos={'relative'}>
          <Image
            src={props.image}
            layout={'fill'}
          />
        </Box>
        <Stack>
          {/* <Text
            color={'green.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            letterSpacing={1.1}>
            Blog
          </Text> */}
          <Heading
            color={useColorModeValue('gray.700', 'white')}
            fontSize={'2xl'}
            fontFamily={'body'}>
            {props.title}
          </Heading>
          <Text color={'gray.500'}>
            {props.desc}
          </Text>
        </Stack>
        {/* <Stack mt={6} direction={'row'} spacing={4} align={'center'}>
          <Avatar
            src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
            alt={'Author'}
          />
          <Stack direction={'column'} spacing={0} fontSize={'sm'}>
            <Text fontWeight={600}>Achim Rolle</Text>
            <Text color={'gray.500'}>Feb 08, 2021 · 6min read</Text>
          </Stack>
        </Stack> */}
      </Box>
    </Center>
  );
}