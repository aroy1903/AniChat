import { useState } from 'react';
import Groups from '../components/Groups';
import UserScreen from '../components/UserScreen';
import useRender from '../hooks/useRender';
import RenderContext from '../renderContext/renderContext';

export default function Chat() {
  const { dispatch } = useRender();

  return (
    <div className=" flex-grow flex justify-center items-center  bg-[#F6EEF8]">
      <div className=" h-[750px] w-3/5 border-black rounded-2xl border-2 flex">
        <Groups />
        <UserScreen />
      </div>
    </div>
  );
}
