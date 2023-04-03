import React from 'react'
import useFetch from '../utils/useFetch'
import {key} from '../../key'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'



function Cart() {
  const {book,AddToCart,cart}:any = useGlobalContext() 
   console.log(cart)
    const carts =cart.map((el:any ,index:number) =>(
          <div className=' bg-red-700 p-1' key={index}>
            {el.title} {el.amount}</div>
        ))

  return (
    <article className=' flex flex-col items-center textlg m-2 p-2 h-full border-2 border-slate-900 rounded-xl  '>
      <div className=' text-3xl font-bold text-slate-50'>Cart</div>
      <div className=' text-start m-2 flex flex-col gap-2'>{carts}</div>
       
    </article>
  )
}

export default Cart
