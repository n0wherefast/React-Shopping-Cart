import React from 'react'
import { INITIAL_STATE } from "../utils/typesInterface";
import {ADD_TO_CART,
        DELETE_ITEM,
        INCREASE_ITEM,
        DECREASE_ITEM,
        ADD_BOOK,
        TOTAL} from './action';

const reducer = (state:INITIAL_STATE,{type,payload}:any ) => {
   const {cart,total,itemCounter} = state
   
  if(type === ADD_BOOK){
    // console.log(payload)
    return {
      ...state,
      book:{...payload}
      
    }
  }
  if(type === ADD_TO_CART){
    // console.log(payload)
    return {
      ...state,
       cart:[...cart,payload ]
    }
  }
  if (type === DELETE_ITEM){
     return {
       ...state,
       cart: cart.filter((x:any)=> x.id !==payload)
    }
  }
  if (type === INCREASE_ITEM) {
    return   {
      ...state, cart: cart.map((item:any) => {
        if(payload === item.id) { 
          return {...item, qty: item.qty ++}
        }
        return{...item}
      }),
    }
  }
  if(type === DECREASE_ITEM) {
    return {
      ...state, cart: cart.map((item:any) => {
        if(payload === item.id) { 
          
          return {...item, qty: item.qty --}
        }
        return{...item}
      }),
    }
  }
  if(type === TOTAL) {
    let sum = 0
    let price = cart.map((item:any) => {
      return sum += Number(item.amount)
    })
    console.log(price)
  }


  return state
};
export default reducer
