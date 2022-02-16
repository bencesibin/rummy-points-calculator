import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

import { auth } from "../FirebaseConfig";

const AuthContext = createContext({
    currentUser: {},
    register: (_email, _password) => Promise,
    login: (_email, _password) => Promise,
    signInWithGoogle: () => Promise,
    logout: () => Promise
})

export const useAuth = () => useContext(AuthContext)

export default function AuthContextProvider({ children }) {
    const [currentUser, setCurrentUser] = useState({})

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => setCurrentUser(user))

        return () => {
            unsubscribe()
        }
    }, [])

    function register(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function signInWithGoogle() {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    }

    function logout() {
        return signOut(auth)
    }

    const value = {
        currentUser,
        register,
        login,
        signInWithGoogle,
        logout,
    }

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}