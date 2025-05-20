import React, { useEffect, useState } from 'react';
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

import { AuthContext } from './AuthContext';
import { auth } from '../Firebase/firebase.config';

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    //update profile
    const updateUserProfile=(updatedProfileInfo)=>{
        return updateProfile(auth.currentUser,updatedProfileInfo)
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
        })
        return ()=>{
            unsubscribe()
        }
    },[])

    const userInfo={
        createUser,
        logInUser,
        updateUserProfile,
        user,
        setUser,
        logOutUser
    }
    //login
    return (
       <AuthContext value={userInfo}>
        {children}
       </AuthContext>
    )
};

export default AuthProvider;