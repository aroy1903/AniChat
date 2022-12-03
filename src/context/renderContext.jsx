import { createContext, useReducer } from 'react';
import InviGroup from '../components/InviGroup';
import UserGroups from '../components/UserGroups';
import ChatScreen from '../components/ChatScreen';

export const Render = createContext();

const renderReducer = (state, action) => {
  switch (action.type) {
    case 'GROUP':
      return { ...state, component: <InviGroup />, anime: action.payload };
    case 'USER':
      return { ...state, component: <UserGroups /> };
    case 'CHAT':
      console.log(action.payload);
      return {
        ...state,
        component: <ChatScreen anime={action.payload} />,
        anime: action.payload,
      };
    default:
      return state;
  }
};

export default function RenderContext({ children }) {
  const [state, dispatch] = useReducer(renderReducer, {
    component: <UserGroups />,
    anime: null,
  });

  return (
    <Render.Provider value={{ ...state, dispatch }}>{children}</Render.Provider>
  );
}
