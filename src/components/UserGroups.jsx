import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { async } from '@firebase/util';
import useAuth from '../hooks/useAuth';

export default function UserGroups() {
  const [quote, setQuote] = useState(null);
  const [name, setName] = useState(null);
  const { user } = useAuth();
  return (
    <div className=" bg-transparent h-full w-full">
      <div>
        <h3 className=" text-center text-xl mt-5">
          welcome {user.displayName}
        </h3>
        <div className="flex w-full justify-center mt-16 items-center h[25%]"></div>
      </div>
    </div>
  );
}
