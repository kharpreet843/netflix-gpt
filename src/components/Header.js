import React from 'react'
import { useNavigate } from 'react-router'
import { signOut } from "firebase/auth";
import { useSelector } from 'react-redux';
import {auth}  from '../utilis/firebase';
import {  onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utilis/userSlice'
const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const Getdata=useSelector(store=>store.user);
 // console.log(Getdata)
  useEffect(()=>{
  const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const {uid,email,displayName} = user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName}));
navigate("/browse")
        } else {
            dispatch(removeUser());
            navigate("/")
        }
      });
      return ()=>{
        unsubscribe();

      }
},[]);

 // console.log(Getdata)
  const signout=()=>{
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      navigate("/error")
    });
  }
  return (
    <div className="flex absolute px-8 py-2 bg-gradient-to-b justify-between w-full z-20 text-white">
      <img src="https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940" className="w-44"  alt="juuj"></img>
      {Getdata && <div>  <h3>{Getdata && Getdata.displayName}</h3>
      <div className='font-bold text-white' onClick={signout}><button >sign OUT</button></div></div>
      }
      
      </div>
  )
}

export default Header