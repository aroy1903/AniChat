import { useState } from 'react';
import useRender from '../hooks/useRender';

export default function Groups() {
  const { dispatch } = useRender();

  return (
    <div className="h-full w-[30%] bg-slate-400 rounded-l-xl">
      <h2 onClick={() => dispatch({ type: 'GROUP' })}>Groups</h2>
    </div>
  );
}
