import { useState } from 'react';
import { BsFillChatFill } from 'react-icons/bs';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import {
  addDoc,
  serverTimestamp,
  collection,
  onSnapshot,
  query,
  where,
  orderBy,
} from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import useAuth from '../hooks/useAuth';
import useCollection from '../hooks/useCollection';
import useRender from '../hooks/useRender';
import { useEffect } from 'react';
import ChatBubble from './ChatBubble';

export default function ChatScreen() {
  const { user } = useAuth();

  const { anime } = useRender();
  const [chat, setChat] = useState('');

  const [documents, setDocuments] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const colRef = collection(db, 'messages');
  const q = query(
    colRef,
    where('animeName', '==', anime),
    orderBy('createdAt', 'asc')
  );

  const getDocs = () => {
    onSnapshot(
      q,
      (snapshot) => {
        setLoading(true);
        let results = [];
        snapshot.docs.forEach((doc) =>
          results.push({ ...doc.data(), docId: doc.id })
        );
        setDocuments(results);
        setLoading(false);
      },
      (err) => setError(err.message)
    );
  };

  useEffect(() => {
    getDocs();
  }, [anime]);

  const handleChat = () => {
    if (chat === '') {
      return;
    }
    addDoc(colRef, {
      id: user.uid,
      createdAt: serverTimestamp(),
      animeName: anime,
      message: chat,
      username: user.displayName,
    });
    setChat('');
  };

  return (
    <div className=" w-full h-full flex flex-col ">
      <h3 className=" text-center text-xl  mt-5">{anime}</h3>
      <div className=" flex-grow">
        <div className=" h-[90%] w-full bg-white border-2 border-x-0 border-black overflow-y-scroll">
          {error && <p>{error}</p>}
          {documents &&
            documents.map((doc) => (
              <ChatBubble
                chat={doc.message}
                key={doc.docId}
                user={doc.username}
              />
            ))}
        </div>

        <div className="h-[10%] w-full flex bg-white rounded-b-xl items-center">
          <FormControl
            w="80%"
            className=" flex items-center justify-center ml-5"
          >
            <Input
              rounded="none"
              variant="filled"
              type="text"
              borderColor="black"
              focusBorderColor="black"
              value={chat}
              onChange={(e) => setChat(e.target.value)}
            />
          </FormControl>
          <div className=" w-[20%] ml-3">
            <button
              className="  h-fit text-3xl flex justify-center items-center text-slate-500 border-neutral-800  "
              onClick={handleChat}
            >
              <BsFillChatFill />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
