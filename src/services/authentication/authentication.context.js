import React, {useState, createContext} from 'react';
import * as firebase from 'firebase';

import {loginRequest} from './authentication.service';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  firebase.auth().onAuthStateChanged(u => {
    if (u) {
      setUser(u);
      setIsAuthenticated(true);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  });

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then(u => {
        setUser(u);
        setIsAuthenticated(true);
        setIsLoading(false);
      })
      .catch(e => {
        setError(e);
        setIsLoading(false);
      });
  };

  const onLogout = () => {
    setUser(null);
    setIsAuthenticated(false);
    firebase.auth().signOut();
  };

  const onRegister = (email, password, repeatedPassword) => {
    if (password !== repeatedPassword) {
      setError('Passwords do not match.');
      return;
    } else {
      setIsLoading(true);
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(u => {
          setUser(u);
          setIsAuthenticated(true);
          setIsLoading(false);
        })
        .catch(e => {
          setError(e);
          setIsLoading(false);
        });
    }
  };

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        isLoading,
        error,
        isAuthenticated,
        onLogin,
        onLogout,
        onRegister,
      }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
