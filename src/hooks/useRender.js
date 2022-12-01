import { useContext } from 'react';
import { Render } from '../context/renderContext';

export default function useRender() {
  const context = useContext(Render);
  if (context === undefined) {
    throw new Error('Context not accesible');
  }

  return context;
}
