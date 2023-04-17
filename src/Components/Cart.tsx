import React,{useEffect} from 'react'
import useFetch from '../utils/useFetch'
import {key} from '../../key'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context/context'
import Counter from '../utils/Counter'
import { ImBin } from "react-icons/im";
import Total from './Total'
import BookItem from './BookItem'



function Cart() {
  const {cart,RemToCart,book,totalPrice}:any = useGlobalContext() 
  // console.log(cart)
   
    const carts = cart?.map((el:any ,index:number) =>{
      const  newTitle = el.title.length >25 ?  el.title.slice(0,15) : el.title
       
      // console.log(el.qty)
      return <BookItem
              classNameSec ={' bg-cyan-400 flex justify-start items-center w-[330px] h-[60px] shadow-2xl'}
              classNameDiv = {'flex p-1 justify-center items-center w-full h-full'}
              classNamePrice ={'bg-green-500 rounded-lg p-1 m-1'}
              classNameH1 = {'m-1 font-semibold'}
              key={index}
              title= {newTitle}
              amount={el.amount}>
                 <Counter
              books = {el}
               />  
              <button className='w-[26px] h-[28px] bg-red-700 m-1 rounded-lg font-bold hover:bg-red-800 flex justify-center items-center'
               onClick={()=> RemToCart(el.id)}><ImBin/></button>
              </BookItem>
      
      })

      useEffect(()=>{totalPrice()},[cart])
        
// console.log(book.quantity)
  return (
    <article className=' flex flex-col items-center textlg m-2 p-1 h-full border-2 border-slate-900 rounded-xl min-w-[90%] '>
      <div className=' text-3xl text-cyan-600 font-black p-2'>CART</div>
      <div className=' text-start flex flex-col gap-2 '>{carts}</div>      
     <Total/>
    </article>
  )
}

export default Cart
