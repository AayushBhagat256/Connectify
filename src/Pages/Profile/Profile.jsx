import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  HStack,
  Text,
  SimpleGrid,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
  Divider,
} from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';
import { useEffect,useState } from 'react';
import axios from 'axios';
import User from '../Explore/User';
import BlogPostWithImage from './Myposts';
import BasicStatistics from './Stats';

export default function Profile() {
  const [user, setUser] = useState([])
  const [post,setPost] = useState([])
  const [friend,setFriend] = useState([])
  const userinfo = () => {

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `http://localhost:8000/userProfile/${localStorage.getItem('id')}`,
      headers: {
        'Authorization': `${localStorage.getItem('token')}`
      }
    };

    axios.request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setUser(response.data)
        setPost(response.data.postModels)
        setFriend(response.data.friends)
        // datauser = JSON.stringify(response.data)
      })
      .catch((error) => {
        console.log(error);
      });

  }
  useEffect(
    () => {
      userinfo();
    },[]
  )
  const linkss = 'http://localhost:8000/'
  // console.log(datauser)
  console.log(user)
  const [username,setUsername] = useState(user.userName)
  console.log(username)
  return (
    <>
    <Flex
      minH={'auto'}
      align={'flex-start'}
      direction={'column'}
      justify={'flex-start'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
        {/* <SimpleGrid gap={'3'} columns={{ base: 1, md: 3 }}> */}
      <Flex gap={4} id='flexstats'>
      <Stack
        spacing={6}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        ml={1}
        p={12}
        my={1}>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', sm: '3xl' }}>
          User Profile Edit
        </Heading>
            <FormControl id="userName">
          <FormLabel>User Icon</FormLabel>
          <Stack direction={['column', 'row']} spacing={6}>
            <Center>
              <Avatar size="xl" src={linkss+user.picturepath}>
                <AvatarBadge
                  as={IconButton}
                  size="sm"
                  rounded="full"
                  top="-10px"
                  colorScheme="red"
                  aria-label="remove Image"
                  icon={<SmallCloseIcon />}
                />
              </Avatar>
            </Center>
            <Center w="full">
              <Button w="full">Change Icon</Button>
            </Center>
          </Stack>
        </FormControl>
        <FormControl id="userName" isRequired>
          <FormLabel>User name</FormLabel>
          <Input
            placeholder={username}
            value={user.userName}
            // onChange={e=>setUser(e.target.value)}
            _placeholder={{ color: 'gray.500' }}
            type="text"
          />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email address</FormLabel>
          <Input
            placeholder="your-email@example.com"
            value={user.email}
            _placeholder={{ color: 'gray.500' }}
            type="email"
          />
        </FormControl>
        <Stack spacing={6} direction={['column', 'row']}>
          <Button
            bg={'blue.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'blue.500',
            }}>
            Edit
          </Button>
        </Stack>
      </Stack>
      {/* <BlogPostWithImage/> */}
      <BasicStatistics friends={friend.length} posts={post.length}/>
      </Flex>
      {/* <User name="lord"/>
      <User name="lord"/>
      <User name="lord"/> */}
      {/* <Divider><p>Your posts</p></Divider> */}
      <SimpleGrid gap={'3'} columns={{ base: 1, md: 3 }}>
        {post.map(map=>{
          return(
            <BlogPostWithImage image={linkss+map.postPic} desc = {map.description} title={map.title}/>
          )
        }).reverse()}
      {/* <BlogPostWithImage/>
      <BlogPostWithImage/> */}
      </SimpleGrid>
        {/* </SimpleGrid> */}
    </Flex>
    </>
  );
}