import React, { useState } from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  InputRightElement,
  InputGroup,
} from '@chakra-ui/react';
import BgImage from '../components/BgImage';
import { useNavigate } from 'react-router-dom';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <BgImage>
      <Flex align={'center'} justify={'center'} width={'100%'}>
        <Stack
          spacing={5}
          mx={'auto'}
          maxW={'lg'}
          py={12}
          px={8}
          bg={'whiteAlpha.300'}
          rounded={'lg'}
        >
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} color={'white'}>
              Sign in to your account
            </Heading>
            <Text fontSize={'lg'} color={'gray.400'}>
              To explore our Great Application!
            </Text>
          </Stack>
          <Stack spacing={5} p={2}>
            <FormControl id="email">
              <FormLabel color={'white'}>Email address</FormLabel>
              <Input bgColor={'white'} type="email" />
            </FormControl>
            <FormControl id="password">
              <FormLabel color={'white'}>Password</FormLabel>
              <InputGroup>
                <Input
                  bgColor={'white'}
                  type={showPassword ? 'text' : 'password'}
                />
                <InputRightElement h={'full'}>
                  <Button
                    onClick={() =>
                      setShowPassword(showPassword => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Button
              bg={'#2f1cdd'}
              color={'white'}
              _hover={{
                bg: '#170d75',
              }}
            >
              Sign in
            </Button>
          </Stack>
          <Text align={'center'} color={'gray.400'} fontWeight={600}>
            Dont have an account?{' '}
            <Link onClick={() => navigate('/register')} color={'white'}>
              Register
            </Link>
          </Text>
        </Stack>
      </Flex>
    </BgImage>
  );
};

export default Login;
