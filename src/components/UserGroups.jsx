import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Image } from '@chakra-ui/react';
import useAuth from '../hooks/useAuth';
import { async } from '@firebase/util';
import useCollection from '../hooks/useCollection';
import InviGroup from './InviGroup';
import Group from './Group';
export default function UserGroups() {
  const [image, setImage] = useState(null);
  const { user } = useAuth();
  const { documents, error, loading } = useCollection('groups', [
    'id',
    '==',
    user.uid,
  ]);

  const getAnimeSrc = async () => {
    const res = await axios.get('https://api.waifu.pics/sfw/happy');
    const data = res.data;
    const { url } = data;
    setImage(url);
  };

  useEffect(() => {
    getAnimeSrc();
  }, []);

  return (
    <div className=" bg-transparent h-full w-full">
      <div className="flex justify-center flex-col items-center">
        <h3 className=" text-center text-xl mt-5">your groups</h3>
        <Image src={image} w="50%" h="200px" />
        {error && <p>{error}</p>}
        <div className="flex justify-between p-3 h-[440px] flex-wrap overflow-auto border-t-2 border-black mt-2">
          {image &&
            documents.map((doc) => <InviGroup key={doc.docId} data={doc} />)}
          {image && documents.length < 1 && <p>no user created groups</p>}
          {!image && <p className="text-3xl">Loading...</p>}
        </div>
        <div className="flex w-full justify-center mt-16 items-center h[25%]"></div>
      </div>
    </div>
  );
}
