import React from 'react';
import useAuth from '../hooks/useAuth';

export default function ChatBubble({ chat, user: firestoreUser }) {
  const { user } = useAuth();
  return (
    <div
      className="ml-2 flex w-[90%] p-5 pr-0"
      style={
        user.displayName === firestoreUser ? { justifyContent: 'flex-end' } : {}
      }
    >
      <div className="flex flex-col ">
        <div
          className=" flex  "
          style={
            user.displayName === firestoreUser
              ? { justifyContent: 'flex-end' }
              : { justifyContent: 'flex-start' }
          }
        >
          {user.displayName === firestoreUser && 'you'}
          {user.displayName !== firestoreUser && firestoreUser}
        </div>

        <div className=" bg-[#ADD8E6] text-black">{chat}</div>
      </div>
    </div>
  );
}
