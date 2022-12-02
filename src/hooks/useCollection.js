import { db } from '../firebase/firebaseConfig';
import {
  onSnapshot,
  query,
  where,
  orderBy,
  collection,
} from 'firebase/firestore';
import { useEffect, useRef, useState } from 'react';

export default function useCollection(queryArr) {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let _query;
  if (!queryArr) {
    _query = ['id', '!=', '1'];
  } else {
    _query = useRef(queryArr).current;
  }

  const colRef = collection(db, 'groups');
  let q = query(colRef, where(..._query), orderBy(_query[0]));

  useEffect(() => {
    setLoading(true);
    const unsub = onSnapshot(
      q,
      (snapshot) => {
        let result = [];
        snapshot.docs.forEach((doc) =>
          result.push({ docId: doc.id, ...doc.data() })
        );
        setDocuments(result);
        setLoading(false);
      },
      (err) => {
        setError(err.message);
        setLoading(false);
      }
    );
    return () => unsub();
  }, []);

  return { documents, error, loading };
}
