import React, { useState } from 'react'
import { HiPlusSm,HiMinusSm } from "react-icons/hi";
import { useGlobalContext } from '../context/context'


function Counter() {
  const {decrease,increase,quantity}:any = useGlobalContext()
 
 
  return (
    <div className='flex m-1' >
      <button className=' bg-sky-400  w-6 rounded-l-lg flex justify-items-center items-center' onClick={increase}><HiPlusSm/></button>
      <div className='w-8 bg-white flex justify-center items-center font-semibold'>{quantity}</div>
      <button className=' bg-red-600  w-6 h-7 rounded-r-lg flex justify-center items-center'  onClick={decrease}><HiMinusSm/></button>
    </div>
  )
}

export default Counter
