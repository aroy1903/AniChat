import { useState } from 'react';
import {
  Box,
  VStack,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
  HStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import useAuth from '../hooks/useAuth';
import { auth } from '../firebase/firebaseConfig';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState(null);
  const { dispatch } = useAuth();

  const [signInWithEmailAndPassword, user, error] =
    useSignInWithEmailAndPassword(auth);

  const handleSubmit = async () => {
    if (email === '' || password === '') {
      setFormError('A required field is missing');
      setTimeout(() => setFormError(null), 3000);
      return;
    }
    const res = await signInWithEmailAndPassword(email, password);
    dispatch({ type: 'LOGIN', payload: res.user });
    if (res) {
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className=" flex-grow flex justify-center items-center bg-[#F6EEF8]">
      <Box
        w={['full', 'md']}
        p={[8, 10]}
        borderRadius={10}
        boxShadow="dark-lg"
        backgroundColor="white"
        color="black"
      >
        <VStack spacing={4} align="center" w="full">
          <VStack spacing={1} align="center" w="full">
            <Heading>Login</Heading>
            {error && <Text>{error.message}</Text>}
            {formError && <Text>{formError}</Text>}
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
          <HStack w="full" justify="flex-end">
            <Text>
              <Link to="/forgot">forgot password?</Link>
            </Text>
          </HStack>
          <Button type="submit" colorScheme="gray" onClick={handleSubmit}>
            Login
          </Button>
        </VStack>
      </Box>
    </div>
  );
}
