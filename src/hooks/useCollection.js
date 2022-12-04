import { db } from '../firebase/firebaseConfig';
import {
  onSnapshot,
  query,
  where,
  orderBy,
  collection,
} from 'firebase/firestore';
import { useEffect, useRef, useState } from 'react';

export default function useCollection(collectionName, queryArr) {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const queryA = useRef(queryArr).current;
  let _query;
  if (!queryArr) {
    _query = ['createdAt', '!=', '1'];
  } else {
    _query = queryA;
  }

  const colRef = collection(db, collectionName);
  let q = query(colRef, where(..._query), orderBy('createdAt', 'desc'));

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
  }, [queryA]);

  return { documents, error, loading };
}
