// hooks/use-content.js
import { useEffect, useState } from 'react';
import { db } from '../lib/firebase.prod'; // adjust path to wherever you export `db`
import { collection, getDocs } from 'firebase/firestore';

export default function useContent(target) {
  const [content, setContent] = useState([]);

  useEffect(() => {
    let isMounted = true;

    (async () => {
      try {
        const snap = await getDocs(collection(db, target));
        const allContent = snap.docs.map((doc) => ({
          ...doc.data(),
          docId: doc.id,
        }));
        if (isMounted) setContent(allContent);
      } catch (err) {
        console.error(err);
      }
    })();

    return () => { isMounted = false; };
  }, [target]); // rerun if you ask for 'films' vs 'series'

  return { [target]: content };
}
