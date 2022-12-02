import { useState } from 'react';
import useRender from '../hooks/useRender';
import GroupPopup from './GroupPopup';

export default function UserScreen({ p, set }) {
  const { component } = useRender();

  return (
    <div className=" h-full w-full bg-transparent rounded-r-xl z-0">
      {component}
      {p && <GroupPopup set={set} />}
    </div>
  );
}
