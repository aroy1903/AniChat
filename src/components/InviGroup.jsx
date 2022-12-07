import { useState } from 'react';

import { Card, Image, CardBody, Stack, Heading, Text } from '@chakra-ui/react';
import useRender from '../hooks/useRender';

export default function InviGroup({ data }) {
  const { dispatch } = useRender();

  return (
    <Card
      maxW="sm"
      padding="5px"
      marginBottom="4px"
      onClick={() => dispatch({ type: 'CHAT', payload: data.anime })}
      cursor="pointer"
      boxShadow="md"
    >
      <CardBody>
        <Image src={data.animeSrc} />
        <Heading fontSize="16px">{data.anime}</Heading>
      </CardBody>
    </Card>
  );
}
