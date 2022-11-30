import { useContext } from 'react';
import { Render } from '../renderContext/renderContext';

export default function useRender() {
  const context = useContext(Render);
  if (context === undefined) {
    throw new Error('Context not accesible');
  }

  return context;
}
