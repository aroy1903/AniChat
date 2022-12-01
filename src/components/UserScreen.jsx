import { useState } from 'react';
import useRender from '../hooks/useRender';
import RenderContext from '../context/renderContext';

export default function UserScreen() {
  const { component } = useRender();

  return (
    <div className=" h-full w-full bg-white rounded-r-xl">{component}</div>
  );
}
