import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Home, Browse, Signin, Signup } from './pages';
import { RedirectIfAuth, RequireAuth } from './helpers/routes';

import { auth } from './lib/firebase.prod';
import { onAuthStateChanged } from 'firebase/auth';

function App() {
  const [user, setUser] = useState(null);              // null until we know
  const [loading, setLoading] = useState(true);        // show nothing/spinner while checking

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u || null);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  if (loading) return null; // or a fancy loader

  return (
    <Router>
      <Routes>
        {/* Public pages: block if already signed in */}
        <Route
          path={ROUTES.SIGN_IN}
          element={
            <RedirectIfAuth user={user} loggedInPath={ROUTES.BROWSE}>
              <Signin />
            </RedirectIfAuth>
          }
        />
        <Route
          path={ROUTES.SIGN_UP}
          element={
            <RedirectIfAuth user={user} loggedInPath={ROUTES.BROWSE}>
              <Signup />
            </RedirectIfAuth>
          }
        />

        {/* Protected page: require auth */}
        <Route
          path={ROUTES.BROWSE}
          element={
            <RequireAuth user={user}>
              <Browse />
            </RequireAuth>
          }
        />

        {/* Anyone can see Home */}
        <Route path={ROUTES.HOME} element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
