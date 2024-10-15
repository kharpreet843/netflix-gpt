import React from 'react'
import { useNavigate } from 'react-router'
import { signOut } from "firebase/auth";
import { useSelector } from 'react-redux';
import {auth}  from '../utilis/firebase';
import {  onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utilis/userSlice'
import { toggleGptSearch } from '../utilis/Gptslice';
import { ChangeLanguage } from '../utilis/ConfigSlice';

const Header = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const Getdata=useSelector(store=>store.user);
  const sGptSearch=useSelector((store)=>store.gpt.showgptSearch);
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
const handleGptsearch=()=>{
dispatch(toggleGptSearch());
}
const setLanguage=(event)=>{
  //console.log(event.target.value)
  dispatch(ChangeLanguage(event.target.value));
}
 // console.log(Getdata)
  const signout=()=>{
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      navigate("/error")
    });
  }
  return (
    <div className="flex absolute px-8 py-2 bg-black bg-gradient-to-b justify-between w-full z-20 text-white">
      <img src="https://images.ctfassets.net/y2ske730sjqp/5QQ9SVIdc1tmkqrtFnG9U1/de758bba0f65dcc1c6bc1f31f161003d/BrandAssets_Logos_02-NSymbol.jpg?w=940" className="w-44"  alt="juuj"></img>

      {Getdata && <div className='flex p-2 gap-4'>
      {sGptSearch &&  <select className="p-2 bg-purple-900 text-black" onChange={setLanguage} >
          <option value="en"  >English</option>
          <option value="hindi">Hindi</option>
          <option value="spanish">spanish</option>
        </select> }
        <button className='py-2 px-4 bg-purple-700 text-white' type="button" onClick={handleGptsearch}>{!sGptSearch ? 'Gpt Search ': 'Home Page'} </button>
        
          <h3>{Getdata && Getdata.displayName}</h3>
    
      <div className='font-bold text-white' onClick={signout}><button >sign OUT</button></div>
      </div>
      }
      
      </div>
  )
}

export default Header