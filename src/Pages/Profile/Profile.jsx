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
  useDisclosure,
  SimpleGrid,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
  Divider,
} from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { SmallCloseIcon } from '@chakra-ui/icons';
import { useEffect, useState } from 'react';
import axios from 'axios';
import User from '../Explore/User';
import BlogPostWithImage from './Myposts';
import BasicStatistics from './Stats';

export default function Profile() {
  const [user, setUser] = useState([])
  const [post, setPost] = useState([])
  const [friend, setFriend] = useState([])
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [view, setView] = useState(false)

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setView(true)
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewImage(null);
      setView(false)
    }
  };

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
    }, []
  )
  const linkss = 'http://localhost:8000/'
  // console.log(datauser)
  console.log(user)
  const [username, setUsername] = useState(user.userName)
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
                  <Avatar size="xl" src={linkss + user.picturepath}>
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
                  <Button w="full">Become a Ghost</Button>
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
                onClick={onOpen}
                _hover={{
                  bg: 'blue.500',
                }}>
                Edit
              </Button>
            </Stack>
          </Stack>
          <BasicStatistics friends={friend.length} posts={post.length} />
        </Flex>
        <Flex align={'center'} id='divider' direction={'row'}>
          <Divider backgroundColor={'#3a7ca5'} />
          <Text padding={"2"} textAlign={'center'}>Your Posts</Text>
          <Divider backgroundColor={'#3a7ca5'} />
        </Flex>
        <SimpleGrid gap={'3'} columns={{ base: 1, md: 3 }}>
          {post.map(map => {
            return (
              <BlogPostWithImage image={linkss + map.postPic} desc={map.description} title={map.title} />
            )
          }).reverse()}

        </SimpleGrid>
        <Modal
          // initialFocusRef={initialRef}
          // finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit your Profile</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>User name</FormLabel>
                <Input placeholder='UserName' />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Email : </FormLabel>
                <Input placeholder='Email : ' />
              </FormControl>

              <Center className='centerdiv'>
                <FormControl mt={4}>
                  <FormLabel>Profile Pic</FormLabel>
                  {/* <Input type='file' /> */}
                  <div className="container">
                    <div className="header">
                      <svg className='svg' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        {
                          view ? (<p style={{ height: '12px' }}></p>) : (
                            <g id="SVGRepo_iconCarrier">
                              <path
                                d="M7 10V9C7 6.23858 9.23858 4 12 4C14.7614 4 17 6.23858 17 9V10C19.2091 10 21 11.7909 21 14C21 15.4806 20.1956 16.8084 19 17.5M7 10C4.79086 10 3 11.7909 3 14C3 15.4806 3.8044 16.8084 5 17.5M7 10C7.43285 10 7.84965 10.0688 8.24006 10.1959M12 12V21M12 12L15 15M12 12L9 15"
                                stroke="#000000"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </g>
                          )
                        }
                      </svg>
                      <p>Browse File to upload!</p>
                      {previewImage && <img className="preview-image" src={previewImage} alt="Preview" />}
                    </div>
                    <label htmlFor="file" className="footer">
                      <svg fill="#000000" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                          <path d="M15.331 6H8.5v20h15V14.154h-8.169z"></path>
                          <path d="M18.153 6h-.009v5.342H23.5v-.002z"></path>
                        </g>
                      </svg>
                      <p>{selectedFile ? selectedFile.name : 'Not selected file'}</p>
                    </label>
                    <input id="file" type="file" onChange={handleFileChange} />
                  </div>
                </FormControl>
              </Center>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme='blue' mr={3}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
    </>
  );
}