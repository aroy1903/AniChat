import { useState } from 'react';
import Groups from '../components/Groups';
import UserScreen from '../components/UserScreen';
import useRender from '../hooks/useRender';
import { addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import { GoDiffAdded } from 'react-icons/go';

export default function Chat() {
  const { dispatch } = useRender();
  const [popup, setPopup] = useState(false);
  const setter = () => setPopup(!popup);

  return (
    <div
      id="main"
      className=" flex-grow flex justify-center items-center  bg-[#F6EEF8]"
    >
      <div className=" h-[800px] w-[52%] border-black rounded-2xl border-2 flex bg-white">
        <Groups />
        <div className="flex-grow flex flex-col">
          <div className=" flex w-full items-center h-9 justify-end border-b-2 border-black ">
            <div className=" flex w-[20%] justify-around mr-3 w[25%] h-full ">
              <h2
                className="cursor-pointer text-[16px] hover:underline w-[75%] h-full flex items-center"
                onClick={() => dispatch({ type: 'USER' })}
              >
                My Groups
              </h2>
              <button className=" text-2xl" onClick={() => setPopup(true)}>
                <GoDiffAdded />
              </button>
            </div>
          </div>
          <UserScreen p={popup} set={setter} />
        </div>
      </div>
    </div>
  );
}
