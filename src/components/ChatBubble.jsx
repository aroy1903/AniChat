import React from 'react';
import { BsChatLeft } from 'react-icons/bs';
import useAuth from '../hooks/useAuth';

export default function ChatBubble({ chat, user }) {
  return (
    <div className="ml-2">
      {user} : {chat}
    </div>
  );
}
