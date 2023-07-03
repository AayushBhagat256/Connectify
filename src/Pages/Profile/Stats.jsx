import {
    Box,
    chakra,
    Flex,
    SimpleGrid,
    Stat,
    Text,
    StatLabel,
    StatNumber,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
import { BiLoader } from 'react-icons/bi';
  import { BsClock, BsFilePost, BsPerson } from 'react-icons/bs';
  import { FiServer } from 'react-icons/fi';
  import { GoLocation } from 'react-icons/go';
  
  
  function StatsCard(props) {
    const { title, stat, icon } = props;
    return (
      <Stat
        px={{ base: 2, md: 10 }}
        py={'5'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={useColorModeValue('gray.800', 'gray.500')}
        rounded={'lg'}>
        <Flex justifyContent={'space-between'}>
          <Box pl={{ base: 2, md: 4 }}>
            <StatLabel fontWeight={'medium'} isTruncated>
              {title}
            </StatLabel>
            <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
              {stat}
            </StatNumber>
          </Box>
          <Box
            my={'auto'}
            color={useColorModeValue('gray.800', 'gray.200')}
            alignContent={'center'}>
            {icon}
          </Box>
        </Flex>
      </Stat>
    );
  }
  
  export default function BasicStatistics(props) {
    return (
      <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
        <chakra.h1
          textAlign={'center'}
          fontSize={'4xl'}
          py={10}
          fontWeight={'bold'}>
          View and control your Circle
        </chakra.h1>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
          <StatsCard
            title={'Friends'}
            stat={props.friends}
            icon={<BsPerson size={'3em'} />}
          />
          <StatsCard
            title={'Posts'}
            stat={props.posts}
            icon={<BsFilePost size={'3em'} />}
          />
          <StatsCard
            title={'Pending Requests'}
            stat={'7'}
            icon={<BsClock size={'3em'} />}
          />
        </SimpleGrid>
        <br />
        <br />
        <Text
        textAlign={'center'}
        fontSize={'4xl'}
        py={10}
        fontWeight={'bold'}
        >“Content is fire. Connectify is gasoline.”</Text>
      </Box>
    );
  }