import React, { 
    createContext,
    useContext 
} from 'react';
import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithEmailAndPassword, 
    signInWithPopup,
    signOut
} from 'firebase/auth';
import {auth} from '../Context/Firebase';

// creating context and google provider
const UserContext = createContext();
const provider = new GoogleAuthProvider();

export const AuthProviderContext = ({ children }) => {
// PopUp login
    const popUpLogIn = () => {
        return signInWithPopup( auth, provider);
    }

// User Create With email and password
    const createUser = ( email, password ) => {
        return createUserWithEmailAndPassword( auth, email, password );
    }

// Login through email and password
    const logIn = ( email, password ) => {
        return signInWithEmailAndPassword( auth, email, password );
    }

// Logout the current user
    const logOut = () => {
        return signOut(auth);
    }

    return (
        <UserContext.Provider value={
            { popUpLogIn, createUser, logIn, logOut }
        }>
                {children}
        </UserContext.Provider>    
        )
};

// Useable in pages and this will call a provider
export const UserAuth = () => {
    return useContext(UserContext);
}