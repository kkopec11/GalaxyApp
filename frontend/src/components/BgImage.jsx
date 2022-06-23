import { Flex } from '@chakra-ui/react';
import React from 'react';
import Background from '../assets/Home/home_bg.jpg';

const BgImage = ({ children }) => {
  return (
    <Flex
      width={'100vw'}
      height={'100vh'}
      backgroundImage={`url(${Background})`}
      backgroundSize={'cover'}
      backgroundPosition={'center center'}
    >
      {children}
    </Flex>
  );
};

export default BgImage;
