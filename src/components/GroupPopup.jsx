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
import { addDoc, serverTimestamp, collection } from 'firebase/firestore';
import { AiOutlineClose } from 'react-icons/ai';
import { uppercase } from '../helper/uppercase';
import { db } from '../firebase/firebaseConfig';
import { async } from '@firebase/util';
import { imageSrc } from '../helper/uppercase';
import useAuth from '../hooks/useAuth';

export default function GroupPopup({ set }) {
  const { user } = useAuth();
  const [anime, setAnime] = useState('');
  const [formError, setFormError] = useState(null);

  const colRef = collection(db, 'groups');

  const post = async () => {
    if (anime === '') {
      setFormError('Anime is missing');
      setTimeout(() => setFormError(null), 3000);
      return;
    }
    const animeSrc = await imageSrc(anime);
    await addDoc(colRef, {
      id: user.uid,
      anime: uppercase(anime),
      animeSrc,
      createdAt: serverTimestamp(),
    });
    set();
  };

  return (
    <Box
      w={['full', 'sm']}
      p={[8, 10]}
      boxShadow="dark-lg"
      borderRadius={10}
      backgroundColor="white"
      className=" z-10 absolute bottom-[40%] left-[45%]   mx-auto "
    >
      <Text
        textAlign="end"
        onClick={set}
        className="flex justify-end mb-5 cursor-pointer"
      >
        <AiOutlineClose />
      </Text>
      <VStack spacing={4} align="center" w="full">
        <VStack spacing={1} align="center" w="full">
          <Heading>New Group</Heading>
          {formError && <Text>{formError}</Text>}
        </VStack>
        <FormControl id="email" isRequired>
          <FormLabel>Anime</FormLabel>
          <Input
            rounded="none"
            variant="filled"
            type="text"
            borderColor="black"
            focusBorderColor="black"
            value={anime}
            onChange={(e) => setAnime(e.target.value)}
          />
        </FormControl>
        <Button colorScheme="gray" onClick={post}>
          Create
        </Button>
      </VStack>
    </Box>
  );
}
