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
} from '@chakra-ui/react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { auth } from '../firebase/firebaseConfig';
import { async } from '@firebase/util';

export default function Forgot() {
  const [email, setEmail] = useState('');
  const [formError, setFormError] = useState(null);
  const [sent, setSent] = useState(null);
  const [info, setInfo] = useState(true);
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);

  const handleClick = async () => {
    if (email === '') {
      setInfo(false);
      setFormError(true);
      setTimeout(() => setFormError(null), 4000);
      return;
    }
    const sent = await sendPasswordResetEmail(email);
    if (sent) {
      setInfo(false);
      setSent(true);
      setEmail('');
    }
  };

  return (
    <div className="flex-grow flex justify-center items-center bg-[#F6EEF8]">
      <Box
        w={['full', 'lg']}
        p={[8, 10]}
        boxShadow="dark-lg"
        borderRadius={10}
        backgroundColor="white"
      >
        <VStack spacing={4} align="center" w="full">
          <VStack spacing={1} align="center" w="full">
            <Heading>Forgot Your Password?</Heading>
            {error && (
              <Text p="1" className=" text-md">
                {error.message}
              </Text>
            )}
            {formError && (
              <Text p="1" className=" text-md">
                Missing Email
              </Text>
            )}
            {sent && (
              <Text p="1" className=" text-md">
                the recovery email has been sent.
              </Text>
            )}
            {info && !error ? (
              <Text p="1" className=" text-md">
                a recovery email will be sent.
              </Text>
            ) : (
              1
            )}
          </VStack>
          <FormControl id="email" isRequired>
            <FormLabel>e-mail address</FormLabel>
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
          <Button colorScheme="gray" onClick={handleClick}>
            send
          </Button>
        </VStack>
      </Box>
    </div>
  );
}
