import { createContext, useContext, useEffect, useState } from 'react';
    import { auth } from '../firebaseConfig';
    import {
      signInWithEmailAndPassword,
      signInWithPopup,
      createUserWithEmailAndPassword,
      signOut,
      onAuthStateChanged
    } from 'firebase/auth';

    const AuthContext = createContext();

    export function AuthProvider({ children }) {
      const [currentUser, setCurrentUser] = useState(null);
      const [loading, setLoading] = useState(true);

      function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password);
      }

      function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
      }

      function googleLogin() {
        return signInWithPopup(auth, googleProvider);
      }

      function logout() {
        return signOut(auth);
      }

      useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          setCurrentUser(user);
          setLoading(false);
        });

        return unsubscribe;
      }, []);

      const value = {
        currentUser,
        signup,
        login,
        googleLogin,
        logout
      };

      return (
        <AuthContext.Provider value={value}>
          {!loading && children}
        </AuthContext.Provider>
      );
    }

    export function useAuth() {
      return useContext(AuthContext);
    }