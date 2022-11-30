import { useState } from 'react';
import useRender from '../hooks/useRender';
import RenderContext from '../renderContext/renderContext';

export default function UserScreen() {
  const { component } = useRender();

  return (
    <div className=" h-full w-[70%] bg-white rounded-2xl">{component}</div>
  );
}
