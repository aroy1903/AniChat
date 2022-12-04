import { Card, Heading, Image, Stack } from '@chakra-ui/react';
import React from 'react';
import useRender from '../hooks/useRender';
import axios from 'axios';
export default function Group({ data }) {
  const { dispatch, anime } = useRender();
  const src = data.animeSrc;
  return (
    <Card
      direction="row"
      h="12"
      variant="elevated"
      w="full"
      bgColor="Background"
      borderRadius="0"
      cursor="pointer"
      borderY="1px"
      marginBottom="4px"
      onClick={() => dispatch({ type: 'CHAT', payload: data.anime })}
    >
      <Image
        objectFit="cover"
        src={src}
        alt="group Image"
        minWidth="50px"
      ></Image>
      <Stack flexGrow="1" align="center" justify="center">
        <Heading fontSize={['2xl', 'lg']} textAlign="center">
          {data.anime}
        </Heading>
      </Stack>
    </Card>
  );
}
