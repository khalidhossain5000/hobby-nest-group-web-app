import React, { useEffect, useState } from 'react';
import {  createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import { AuthContext } from './AuthContext';
import { auth } from '../Firebase/firebase.config';

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    //update profile
    const updateUserProfile=(updatedProfileInfo)=>{
        
        return updateProfile(auth.currentUser,updatedProfileInfo)
    }
    //google regsi/login
    const handleGoogleUser=()=>{
        const provider =new GoogleAuthProvider;
        return signInWithPopup(auth,provider)
         
    }
    //signout
    const logOutUser=()=>{
        return signOut(auth)
    }
    //observer onAuthstatechange
    // console.log(user);
    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscribe()
        }
    },[])

    const userInfo={
        createUser,
        logInUser,
        handleGoogleUser,
        updateUserProfile,
        user,
        setUser,
        logOutUser,
        loading,
        setLoading
    }
    //login
    return (
       <AuthContext value={userInfo}>
        {children}
       </AuthContext>
    )
};

export default AuthProvider;