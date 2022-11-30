import { useState, useEffect } from 'react';
import {
  Box,
  VStack,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from 'react-firebase-hooks/auth';

import { auth } from '../firebase/firebaseConfig';
import { async } from '@firebase/util';
import useAuth from '../hooks/useAuth';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile] = useUpdateProfile(auth);
  const [signupErr, setSignUpErr] = useState(null);
  const { dispatch } = useAuth();

  const handleSubmit = async () => {
    console.log(email, password, displayName);
    const res = await createUserWithEmailAndPassword(email, password);
    const update = await updateProfile({ displayName });
    if (res) {
      dispatch({ type: 'LOGIN', payload: res.user });
    }
    if (update) {
      console.log('all good');
      setDisplayName('');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className=" flex-grow flex justify-center items-center bg-[#F6EEF8]">
      <Box
        w={['full', 'md']}
        p={[8, 10]}
        boxShadow="dark-lg"
        borderRadius={10}
        backgroundColor="white"
      >
        <VStack spacing={4} align="center" w="full">
          <VStack spacing={1} align="center" w="full">
            <Heading>Sign Up</Heading>
            {error && <Text>{error.message}</Text>}
          </VStack>
          <FormControl>
            <FormLabel>e-mail address:</FormLabel>
            <Input
              rounded="none"
              variant="filled"
              type="email"
              borderColor="black"
              focusBorderColor="black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>password:</FormLabel>
            <Input
              rounded="none"
              variant="filled"
              type="password"
              borderColor="black"
              focusBorderColor="black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel>display name: </FormLabel>
            <Input
              rounded="none"
              variant="filled"
              type="text"
              borderColor="black"
              focusBorderColor="black"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </FormControl>
          <Button colorScheme="gray" onClick={handleSubmit}>
            Sign Up
          </Button>
        </VStack>
      </Box>
    </div>
  );
}
