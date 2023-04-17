import React, { useState } from 'react'
import { HiPlusSm,HiMinusSm } from "react-icons/hi";
import { useGlobalContext } from '../context/context'


function Counter({books}:any) {
  const {qty,id} = books
  const {decrease,increase,RemToCart}:any = useGlobalContext()
 
//  console.log(id);
const  checkQti = (id:string) =>{
  if (qty <= 1){
    return RemToCart(id)
  }else {decrease(id)}

}
 
  return (
    <div className='flex m-1' >
      <button className=' bg-sky-400  w-6 rounded-l-lg flex justify-items-center items-center'
         onClick={()=>increase(id)}><HiPlusSm/>
      </button>
      <div className='w-8 bg-white flex justify-center items-center font-semibold'>{qty}</div>
      <button className=' bg-red-600  w-6 h-7 rounded-r-lg flex justify-center items-center'
        onClick={()=> checkQti(id)}><HiMinusSm/>
        </button>
    </div>
  )
}

export default Counter
