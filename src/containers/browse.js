// src/containers/browse.js
import React, { useEffect, useState } from 'react';
import { SelectProfileContainer } from './profiles';
import { auth } from '../lib/firebase.prod';                 // export this from your firebase.js
import { onAuthStateChanged } from 'firebase/auth';

export function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u || null));
    return () => unsub();
  }, []);

  if (!user) return null; // or a loader; or redirect

  return <SelectProfileContainer user={user} setProfile={setProfile} />;
}