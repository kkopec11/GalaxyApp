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
  HStack,
  InputRightElement,
  InputGroup,
} from '@chakra-ui/react';
import BgImage from '../components/BgImage';
import { useNavigate } from 'react-router-dom';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <BgImage>
      <Flex align={'center'} justify={'center'} width={'100%'}>
        <Stack
          spacing={5}
          mx={'auto'}
          maxW={'lg'}
          py={10}
          px={6}
          bg={'whiteAlpha.300'}
          rounded={'lg'}
        >
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} color={'white'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.400'}>
              To join us and explore together the galaxy!
            </Text>
          </Stack>
          <Stack spacing={5} p={2}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel color={'white'}>First Name</FormLabel>
                  <Input bgColor={'white'} type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel color={'white'}>Last Name</FormLabel>
                  <Input bgColor={'white'} type="text" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel color={'white'}>Email address</FormLabel>
              <Input bgColor={'white'} type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
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
              Sign up
            </Button>
          </Stack>
          <Text align={'center'} color={'gray.400'} fontWeight={600}>
            Already have an account?{' '}
            <Link onClick={() => navigate('/login')} color={'white'}>
              Login
            </Link>
          </Text>
        </Stack>
      </Flex>
    </BgImage>
  );
};

export default Register;
