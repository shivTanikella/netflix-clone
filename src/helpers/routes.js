// helpers/routes.js
import React from 'react';
import { Navigate } from 'react-router-dom';
import * as ROUTES from '../constants/routes';

// If the user IS logged in, redirect to loggedInPath; otherwise render children (e.g., Signin/Signup)
export function RedirectIfAuth({ user, loggedInPath, children }) {
  return user ? <Navigate to={loggedInPath} replace /> : children;
}

// If the user is NOT logged in, send them to Sign In; otherwise render children (e.g., Browse)
export function RequireAuth({ user, children }) {
  return user ? children : <Navigate to={ROUTES.SIGN_IN} replace />;
}
