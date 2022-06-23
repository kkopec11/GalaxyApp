import React from 'react';
import Background from '../assets/Home/home_bg.jpg';
import {
  Center,
  Flex,
  Text,
  VStack,
  Stack,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react';
import BgImage from '../components/BgImage';
import CustomBtn from '../components/CustomBtn';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <BgImage>
      <VStack width={'100%'} height={'100%'} spacing={'10'}>
        <VStack spacing={'10'}>
          <Text
            paddingTop={'30vh'}
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={'70px'}
          >
            Welcome in the Galaxy App!
          </Text>
          <Text
            color={'grey'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={'30px'}
          >
            We are happy to explore the universe together
          </Text>
        </VStack>
        <Stack direction={'row'} spacing={20}>
          <CustomBtn
            bg={'whiteAlpha.300'}
            bgHover={'whiteAlpha.500'}
            textColor={'white'}
            onClick={() => navigate('/login')}
          >
            START YOUR JOURNEY
          </CustomBtn>
        </Stack>
      </VStack>
    </BgImage>
  );
};

export default Home;
