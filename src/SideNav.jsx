import React, { ReactNode, useEffect, useState } from 'react';
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
  FiUser,
  FiPlusCircle,
  FiLogOut,
} from 'react-icons/fi';
import LargeWithNewsletter from './Footer';
import BlogPostWithImage from './Pages/Blog';
import ArticleList from './Pages/Blog';
import { Route, Router, Routes, useNavigate } from 'react-router-dom';
import AddPost from './Pages/AddPost';
import Setting from './Pages/setting/Setting';
import SocialProfileWithImage from './Pages/Explore/Explore';
import { BiLogIn, BiLogOut, BiLogOutCircle } from 'react-icons/bi';
import axios from 'axios';
import { AtSignIcon, SettingsIcon } from '@chakra-ui/icons';
import Profile from './Pages/Profile/Profile';

const LinkItems = [
  { name: 'Home', icon: <FiHome />, route: '/home' },
  { name: 'Add Post', icon: <FiPlusCircle />, route: '/add' },
  { name: 'Find Friends', icon: <FiCompass />, route: '/explore' },
  { name: 'View/Edit profile', icon: <FiUser />, route: '/profile' },
  { name: 'Settings', icon: <FiSettings />, route: '/setting' },
];

// const nav = useNavigate();


export default function SidebarWithHeader({
  children,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [option, setOption] = useState('Home')
  // console.log(window.location.href)
  const url = new URL(window.location.href);
  console.log(url.pathname);
  const [user, setUser] = useState()
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

  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="0">
        {
          url.pathname == '/home' ? (<ArticleList />) : (
            url.pathname == '/add' ? (<AddPost />) : (
              url.pathname == '/setting' ? (<Setting />) : (
                url.pathname == '/explore' ? (<SocialProfileWithImage />) : (
                  url.pathname == '/profile' ? (<Profile/>) : (
                    (<p>This is different</p>)
                  )
                )
              )
            )
          )
        }

        <LargeWithNewsletter />
      </Box>
    </Box>
  );
}



const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Connectify
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} route={link.route} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};


const NavItem = ({ route, icon, children, ...rest }) => {
  return (
    <Link href={route} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: 'cyan.400',
          color: 'white',
        }}
        {...rest}>
        <Box
          mr="4"
          fontSize="16"
          _groupHover={{
            color: 'white',
          }}
        >
          {icon}
        </Box>
        {children}
      </Flex>
    </Link>
  );
};


const MobileNav = ({ onOpen, ...rest }) => {
  const [user, setUser] = useState([])
  const link = 'http://localhost:8000/'
  const nav = useNavigate();
  const Signout = () => {
    localStorage.clear()
    nav('/')
  }
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
        localStorage.setItem('username',user.userName)
        localStorage.setItem('profile',link+user.picturepath)
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
  
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('white', 'gray.900')}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold">
        Connectify
      </Text>

      <HStack spacing={{ base: '0', md: '6' }}>
        {/* <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        /> */}
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    link+user.picturepath
                  }
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2">
                  <Text fontSize="sm">{user.userName}</Text> 
                  <Text fontSize="xs" color="gray.600">
                    you
                  </Text>
                  {/* <SettingsIcon/> */}
                  {/* <BiLogOut/> */}
                  {/* <BiLogOutCircle/> */}
                  {/* <AtSignIcon/> */}
                  {/* <FiLogOut/> */}
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}>
              <MenuItem>Profile</MenuItem>
              {/* <MenuItem>Settings</MenuItem> */}
              {/* <MenuItem>Billing</MenuItem> */}
              <MenuDivider />
              <MenuItem onClick={Signout} >Sign out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  );
};