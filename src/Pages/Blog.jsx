import React, { useEffect, useState } from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  useColorModeValue,
  Container,
  VStack,
} from '@chakra-ui/react';
import axios from 'axios';












const BlogTags = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} variant="solid" colorScheme="orange" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};



export const BlogAuthor = (props) => {
  return (
    <HStack marginTop="2" spacing="2" display="flex" alignItems="center">
      {/* <Image
        borderRadius="full"
        boxSize="40px"
        src="https://100k-faces.glitch.me/random-image"
        alt={`Avatar of ${props.name}`}
      /> */}
      <Text fontWeight="medium">{props.name}</Text>
      <Text>—</Text>
      <Text>{props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

const ArticleList = () => {
  const [postData,setPostData] = useState([]);
  const [userPost,setUserPost] = useState([]);
  const getPosts = () => {
  

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://localhost:8000/post/',
      headers: {
        'Authorization': `${localStorage.getItem('token')}`,
      },
    };
  
    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setPostData(response.data.posts)
        setUserPost(response.data.user)
      })
      .catch((error) => {
        console.log(error);
      });
  
  }
  useEffect(
    ()=>{
      getPosts();
    },[]
  )
  const link = 'http://localhost:8000/'
  return (
    <Container maxW={'7xl'} p="12">
      {/* <Heading as="h1">Stories by Chakra Templates</Heading> */}
      {
        postData.map(map=>{
          return(
          <Box
        marginTop={{ base: '1', sm: '5' }}
        display="flex"
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent="space-between">
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center">
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex="2"
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop="5%">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              <Image
                borderRadius="lg"
                src={
                  link+map.postPic
                }
                alt="some good alt text"
                objectFit="contain"
              />
            </Link>
          </Box>
        </Box>
        <Box
          display="flex"
          flex="1"
          flexDirection="column"
          justifyContent="center"
          marginTop={{ base: '3', sm: '0' }}>
          {/* <BlogTags tags={['Engineering', 'Product']} /> */}
          <Heading marginTop="1">
            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
              {map.title}
            </Link>
          </Heading>
          <Text
            as="p"
            marginTop="2"
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize="lg">
            {map.description}
          </Text>

          <BlogAuthor name="Posted At" date={new Date(map.createdAt)} />
          
          {/* {
            map.id==userPost.id?(<h1>{userPost.id}</h1>):()
          } */}
          {/* {userPost.map(map=>{
            return(
              <BlogAuthor name="John Doe" date={new Date('2021-04-06T19:01:27Z')} />
            )
          })} */}
        </Box>
      </Box>
        )}).reverse()
      }
    </Container>
  );
};

export default ArticleList;