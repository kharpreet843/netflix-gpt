import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidData } from '../utilis/validate';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import {auth}  from '../utilis/firebase';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { addUser } from '../utilis/userSlice';
const Login = () => {
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const [issigninForm,setsignForm]=useState(true);
    const [errorMessage,setErrormessage]=useState("")
    const email=useRef(null)
    const password=useRef(null)
    const name=useRef(null)
    const toggleSignin=()=>{
        setsignForm(!issigninForm);
    }
    const handleClick=(e)=>{
        e.preventDefault()
        //console.log(email)
      
      var message=  checkValidData(email.current.value,password.current.value,issigninForm)
      setErrormessage(message);
      if(message) return;
      if(!issigninForm){
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName:name.current.value
          }).then(() => {
            const {uid,email,displayName}=auth.currentUser;
            dispatch(addUser({
              uid:uid,
              email:email,
              displayName:displayName
            }))
           //ṣ navigate("/browse");
            // Profile updated!
            // ...
          }).catch((error) => {
            setErrormessage(error.message);
            // An error occurred
            // ...
          });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrormessage(errorMessage)
          // ..
        });
      }else{
        signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    navigate("/browse");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
      }

    }
    return (
        <div>
          <Header/>
        <form method="post" className=' w-3/12 absolute p-12 bg-black mx-auto my-36 right-0 left-0 text-black text-center rounded-lg bg-opacity-50'>
        <h1 className='font-bold text-left text-3xl'>{issigninForm ?' Sign In' :'Sign Up'}</h1>
        {!issigninForm ? <input type="text" className='p-2 m-4 w-full bg-gray-100' ref={name}/>:""}
        <input type="email" name="Email" className='p-2 m-4 w-full bg-gray-100' ref={email}></input>
        <input type='password' name="password" className='p-2 m-4 w-full  bg-gray-100' ref={password}></input>
        <button className="bg-red-500 w-full p-2 m-4" onClick={handleClick} >{issigninForm ?' Sign In' :'Sign Up'}</button>
        {errorMessage && <p className='text-red-600 font-bold'>{errorMessage}</p>}
        <p className='py-4 cursor-pointer'  onClick={toggleSignin}>  {issigninForm ? "Are you new to NetFlix? Signup now" :"Already Registered ? Sign In Now"}</p>
   
        </form>
        </div>
    )
}

export default Login