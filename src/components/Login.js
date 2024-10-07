import React, { useState } from 'react'
import Header from './Header'
const Login = () => {
    const [issigninForm,setsignForm]=useState(true);
    const toggleSignin=()=>{
        setsignForm(!issigninForm);
    }
    return (
        <div><Header/>
        <form className=' w-3/12 absolute p-12 bg-black mx-auto my-36 right-0 left-0 text-white text-center rounded-lg bg-opacity-50'>
        <h1 className='font-bold text-left text-3xl'>{issigninForm ?' Sign In' :'Sign Up'}</h1>
        {!issigninForm ? <input type="text" name="Name" className='p-2 m-4 w-full bg-gray-100'></input>:""}
        <input type="email" name="Email" className='p-2 m-4 w-full bg-gray-100'></input>
        <input type='password' name="password" className='p-2 m-4 w-full  bg-gray-100'></input>
        <button className="bg-red-500 w-full p-2 m-4">{issigninForm ?' Sign In' :'Sign Up'}</button>
        <p className='py-4 cursor-pointer'  onClick={toggleSignin}>  {issigninForm ? "Are you new to NetFlix? Signup now" :"Already Registered ? Sign In Now"}</p>
   
        </form>
        </div>
    )
}

export default Login