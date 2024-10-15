import React from 'react'
import  lang from './languageConstants'
import { useSelector } from 'react-redux'
const Gptsearchbar = () => {
    const defaultLanguage=useSelector((store)=>store.config.defaultLanguage)
  //  console.log(defaultLanguage)
  return (
    <div className='pt-[15%] flex justify-center'>
<form className='bg-black w-1/2 grid grid-cols-12 '>

    <input type='text' className='p-4 m-4 border-s-violet-500 col-span-9' placeholder='what would you like to watch today?'></input>
    <button className='py-2 px-4 bg-red-700 col-span-3 m-4 rounded'>{lang[defaultLanguage].search}</button>
</form>


    </div>
  )
}

export default Gptsearchbar