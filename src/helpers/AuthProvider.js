import React, {createContext, useState} from 'react';
import firebase from 'firebase';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [error, setError] = useState(null);
  
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        token,
        error,
        setError,
        setToken,
        login: async (email, password) => {
          try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            setError({...e, type:'login'});
            //console.log(e);
          }
        },
        register: async (name, email, password) => {
          try {
            const {user} = await firebase.auth().createUserWithEmailAndPassword(email, password);
            user.updateProfile({
              displayName: name,
            });
          } catch (e) {
            setError({...e, type:'register'});
            //console.log(e);
          }
        },
        logout: async () => {
          try {
            await firebase.auth().signOut();
          } catch (e) {
            //console.log(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};