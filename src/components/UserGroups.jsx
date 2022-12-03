import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { async } from '@firebase/util';

export default function UserGroups() {
  const [quote, setQuote] = useState(null);
  const [name, setName] = useState(null);

  const getQuote = async () => {
    const res = await axios.get('https://animechan.vercel.app/api/random');
    const data = res.data;
    const animeName = data.character;
    const animeQuote = data.quote;

    setQuote(animeQuote);
    setName(animeName);
  };

  // useEffect(() => {
  //   getQuote();
  // }, []);

  return (
    <div className=" bg-transparent h-full w-full">
      <div>
        <h3 className=" text-center mt-5">Quote of the Day</h3>
        <div className="flex w-full justify-center mt-16 items-center h[25%]">
          {name && (
            <p
              className=" w-[10rem]
          h-28 flex items-center  text-xs justify-end mr-1"
            >
              {name} -
            </p>
          )}
          {quote && (
            <p className=" w-[250px] h-[120px] flex justify-center items-center text-xs">
              {quote}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
