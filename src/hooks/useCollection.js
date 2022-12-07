import { db } from '../firebase/firebaseConfig';
import {
  onSnapshot,
  query,
  where,
  orderBy,
  collection,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';

export default function useCollection(collectionName, queryArr) {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const colRef = collection(db, collectionName);
  let q = query(colRef, where(...queryArr), orderBy('createdAt', 'desc'));

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
