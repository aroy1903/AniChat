import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { async } from '@firebase/util';

export default function UserGroups() {
  const [quote, setQuote] = useState(null);
  const [name, setName] = useState(null);

  return (
    <div className=" bg-transparent h-full w-full">
      <div>
        <h3 className=" text-center mt-5">Quote of the Day</h3>
        <div className="flex w-full justify-center mt-16 items-center h[25%]"></div>
      </div>
    </div>
  );
}
