import React from 'react'
import useFetch from '../utils/useFetch'
import {key} from '../../key'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'
import Counter from '../utils/Counter'
import { ImBin } from "react-icons/im";



function Cart() {
  const {book,cart,RemToCart}:any = useGlobalContext() 
   console.log(cart)
    const carts =cart.map((el:any ,index:number) =>{
      const  newTitle = el.title.length >25 ?  el.title.slice(0,15) : el.title

      return <div className=' bg-amber-500 p-2 flex justify-between rounded-xl items-center' key={index}>
              <div className='m-1 font-semibold'>{newTitle} </div>   
              <div className=' m-1 font-bold'>{el.amount}</div>
               <Counter/>           
              <button className='w-[30px] h-[30px] bg-red-700 m-1 rounded-lg font-bold hover:bg-red-800 flex justify-center items-center' onClick={RemToCart}><ImBin/></button>
            </div>
})
        

  return (
    <article className=' flex flex-col items-center textlg m-2 p-2 h-full border-2 border-slate-900 rounded-xl min-w-[90%] '>
      <div className=' text-3xl font-bold text-slate-50 p-2'>Cart</div>
      <div className=' text-start flex flex-col gap-2'>{carts}</div>      
     
    </article>
  )
}

export default Cart
