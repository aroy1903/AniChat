import { createContext, useReducer } from 'react';
import Groups from '../components/Groups';

export const Render = createContext();

const renderReducer = (state, action) => {
  switch (action.type) {
    case 'GROUP':
      return <Accordion />;

    default:
      return state;
  }
};

export default function RenderContext({ children }) {
  const [state, dispatch] = useReducer(renderReducer, {
    component: <Groups />,
  });

  return (
    <Render.Provider value={{ ...state, dispatch }}>{children}</Render.Provider>
  );
}
