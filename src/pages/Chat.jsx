import { useState } from 'react';
import Groups from '../components/Groups';
import UserScreen from '../components/UserScreen';
import useRender from '../hooks/useRender';
import { addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import { GoDiffAdded } from 'react-icons/go';

export default function Chat() {
  const { dispatch } = useRender();

  return (
    <div className=" flex-grow flex justify-center items-center  bg-[#F6EEF8]">
      <div className=" h-[780px] w-[52%] border-black rounded-2xl border-2 flex">
        <Groups />
        <div className="flex-grow flex flex-col">
          <div className=" flex w-full items-center h-9 justify-end ">
            <div className=" flex w-1/4 justify-around">
              <h2
                className="cursor-pointer text-xl"
                onClick={() => dispatch({ type: 'USER' })}
              >
                My Groups
              </h2>
              <button className=" text-2xl">
                <GoDiffAdded />
              </button>
            </div>
          </div>
          <UserScreen />
        </div>
      </div>
    </div>
  );
}
