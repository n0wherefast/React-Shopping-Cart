import React, { useState } from 'react'
import { HiPlusSm,HiMinusSm } from "react-icons/hi";


function Counter() {
  const [counter,setCounter] = useState(1)

 
  const increase = () => {
    setCounter(counter +1)
  }

  const decrease = () => {
    setCounter((oldValue) => {
      if (oldValue -1 === 0 ){
        return oldValue
      }
       return oldValue -1
    })

   
  }
  return (
    <div className='flex m-1' >
      <button className=' bg-sky-400  w-5 rounded-l-lg flex justify-items-center items-center' onClick={increase}><HiPlusSm/></button>
      <div className='w-8 bg-white flex justify-center items-center font-semibold'>{counter}</div>
      <button className=' bg-red-600  w-5 rounded-r-lg flex justify-center items-center'  onClick={decrease}><HiMinusSm/></button>
    </div>
  )
}

export default Counter
