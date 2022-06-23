import React from 'react';
import { Button } from '@chakra-ui/react';

const CustomBtn = ({ children, bg, bgHover, textColor, onClick }) => {
  return (
    <Button
      py={7}
      px={5}
      bg={bg}
      rounded={'full'}
      color={textColor}
      _hover={{ bg: bgHover }}
      fontSize={'20px'}
      fontWeight={500}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default CustomBtn;
