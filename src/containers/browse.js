// src/containers/browse.js
import React, { useEffect, useState, useContext } from 'react';
import { SelectProfileContainer } from './profiles';
import { auth } from '../lib/firebase.prod';                 // export this from your firebase.js
import { onAuthStateChanged } from 'firebase/auth';
import { Loading } from '../components'

export function BrowseContainer({ slides }) {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false);
        },3000);
    }, [profile.displayName]);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => setUser(u || null));
    return () => unsub();
  }, []);

  if (!user) return null;

  return profile.displayName ? (
    loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody/>
  ) : <SelectProfileContainer user={user} setProfile={setProfile} />;
}