import React, {createContext, useState} from 'react';
import {Alert} from 'react-native';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext();
export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (error) {
            console.log(error);
            if (error.code === 'auth/invalid-email') {
              Alert.alert('Invalid email');
            }
            if (error.code === 'auth/wrong-password') {
              Alert.alert('Wrong Email or password');
            }
            if (error.code === 'auth/user-not-found') {
              Alert.alert('Wrong Email or password');
            }
          }
        },
        register: async (email, password) => {
          try {
            // console.log('i am register credential', email, password);
            await auth().createUserWithEmailAndPassword(email, password);
          } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
              Alert.alert('Email already in use!');
            }

            if (error.code === 'auth/invalid-email') {
              Alert.alert('Invalid email');
            }
          }
        },
        logout: async () => {
          try {
            await auth().signOut();
          } catch (e) {
            console.log(e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};
