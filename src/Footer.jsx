import {
    Box,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    IconButton,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { BiMailSend } from 'react-icons/bi';
  
  const Logo = (props) => {
    return (
        <div className="logos" style={{fontSize:62}}>
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M138.94 22.99c-.566-.014-1.087-.01-1.56.006-.902.028-1.486.074-2.04.1-.56-.027-1.14-.072-2.043-.1-1.172-.037-2.63-.02-4.37.203h-.013l-.012.003c-33.88 4.402-58.95 36.95-58.95 78.18 0 17.88 4.53 35.75 12.616 50.138-11 4.404-20.23 11.382-27.5 20.107-9.996 11.997-16.58 27.015-21.123 43.496-9.085 32.963-10.13 72.213-10.13 107.604v9.345H65.86l10.513 163.524h54.815v.015h255.886v-.014h53.457l10.515-163.524h42.047v-9.345c0-35.39-1.048-74.64-10.133-107.604-4.544-16.48-11.125-31.5-21.122-43.496-7.27-8.725-16.498-15.703-27.5-20.106 8.085-14.386 12.617-32.257 12.617-50.137 0-41.23-25.07-73.778-58.95-78.18l-.013-.002h-.012c-.314-.04-.61-.067-.906-.095v-.007h-.066c-1.315-.12-2.454-.132-3.4-.102-.894.028-1.464.07-2.022.098-.55-.026-1.127-.07-2.022-.098-.944-.03-2.084-.018-3.4.102H140.78c-.657-.06-1.27-.094-1.84-.108zm-3.6 18.813c.236.002.35.01.605.01 1.135 0 2.276.075 3.416.197h238.185c1.14-.122 2.28-.197 3.416-.197.266 0 .383-.008.626-.01.244.002.362.01.627.01 5.338 0 10.785 1.386 15.875 3.783l.072-.153c17.34 8.21 30.108 28.395 30.108 55.94 0 18.664-6.87 38.574-15.952 49.515l-10.142 12.217 15.605 2.934c12.81 2.407 22.07 8.383 29.7 17.54 7.63 9.157 13.387 21.71 17.463 36.5 7.438 26.984 9.096 60.97 9.344 93.293h-40.77l-10.51 163.525H340.165l-.002-.015H176.78v.015H93.9L83.387 313.383H42.62c.247-32.323 1.905-66.31 9.343-93.293 4.076-14.79 9.833-27.343 17.463-36.5 7.63-9.157 16.89-15.133 29.7-17.54l15.606-2.935-10.142-12.217c-9.083-10.94-15.95-30.85-15.95-49.515 0-27.563 12.783-47.753 30.14-55.953l.077.166c5.09-2.397 10.537-3.783 15.875-3.783.258 0 .37-.008.608-.01zM169.977 60.7c3.935 5.41 7.082 11.84 9.17 19.146h158.65c2.09-7.307 5.235-13.735 9.17-19.145h-176.99zm12.013 37.837c.03.94.05 1.888.05 2.846 0 5.412-.594 10.926-1.636 16.3H336.54c-1.04-5.374-1.634-10.888-1.634-16.3 0-.958.02-1.906.05-2.846H181.99zm-7.316 37.836c-2.452 5.657-5.376 10.658-8.586 14.525l-3.834 4.62H354.69l-3.833-4.62c-3.21-3.867-6.134-8.868-8.586-14.525H174.675zm16.576 37.836c3.67 2.61 6.968 5.74 10.002 9.38 2.433 2.92 4.674 6.19 6.732 9.764H308.96c2.06-3.574 4.3-6.844 6.733-9.764 3.034-3.64 6.33-6.77 10-9.38H191.25zm25.004 37.835c.88 2.6 1.7 5.283 2.46 8.045.988 3.58 1.867 7.29 2.66 11.097h74.196c.794-3.806 1.674-7.517 2.66-11.097.762-2.762 1.582-5.446 2.46-8.045h-84.436zm8.225 37.834c.81 6.24 1.447 12.642 1.942 19.143h64.1c.496-6.5 1.134-12.903 1.945-19.144H224.48zm3.006 37.835c.253 6.384.393 12.778.483 19.144h61.007c.09-6.367.23-12.76.482-19.145h-61.974zM186.51 325.55l-1.233 19.145h146.39l-1.23-19.144H186.51zm-2.434 37.837l-1.23 19.144H334.1l-1.23-19.143H184.075zm-2.43 37.836l-1.232 19.142H336.53l-1.23-19.142H181.646zm-2.433 37.834l-1.23 19.144h160.98l-1.23-19.143h-158.52z"></path></svg>
        </div>
        
    );
  };
  
  const SocialButton = ({
    children,
    label,
    href,
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  const ListHeader = ({ children }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function LargeWithNewsletter() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid
            templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
            spacing={8}>
            <Stack spacing={6}>
              <Box>
                <Logo color={useColorModeValue('gray.700', 'white')} />
              </Box>
              <Text fontSize={'sm'}>
                © 2022 Company name. All rights reserved
              </Text>
              <Stack direction={'row'} spacing={6}>
                <SocialButton label={'Twitter'} href={'#'}>
                  <FaTwitter />
                </SocialButton>
                <SocialButton label={'YouTube'} href={'#'}>
                  <FaYoutube />
                </SocialButton>
                <SocialButton label={'Instagram'} href={'#'}>
                  <FaInstagram />
                </SocialButton>
              </Stack>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Company</ListHeader>
              <Link href={'#'}>About us</Link>
              {/* <Link href={'#'}>Blog</Link> */}
              <Link href={'/connect'}>Contact us</Link>
              {/* <Link href={'#'}>Pricing</Link> */}
              <Link href={'#'}>Testimonials</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Support</ListHeader>
              <Link href={'#'}>Help Center</Link>
              <Link href={'#'}>Terms of Service</Link>
              {/* <Link href={'#'}>Legal</Link> */}
              <Link href={'#'}>Privacy Policy</Link>
              {/* <Link href={'#'}>Satus</Link> */}
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Stay up to date</ListHeader>
              <Stack direction={'row'}>
                <Input
                  placeholder={'Your email address'}
                  bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                  border={0}
                  _focus={{
                    bg: 'whiteAlpha.300',
                  }}
                />
                <IconButton
                  bg={useColorModeValue('blue.400', 'pink.800')}
                  color={useColorModeValue('white', 'gray.800')}
                  _hover={{
                    bg: 'pink.600',
                  }}
                  aria-label="Subscribe"
                  icon={<BiMailSend />}
                />
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    );
  }