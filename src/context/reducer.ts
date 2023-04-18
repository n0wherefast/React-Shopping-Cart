import { INITIAL_STATE } from "../utils/typesInterface";
import {ADD_TO_CART,
        DELETE_ITEM,
        INCREASE_ITEM,
        DECREASE_ITEM,
        ADD_BOOK,
        TOTAL,
        COUNTER} from './action';

const reducer = (state:INITIAL_STATE,{type,payload}:any ) => {
   const {cart} = state
   
  if(type === ADD_BOOK){

    return {
      ...state,
      book:{...payload}
      
    }
  }
  if(type === ADD_TO_CART){

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
          return {...item, qty: item.qty + 1}
        }
        return{...item}
      }),
    }
  }

  if(type === DECREASE_ITEM) {
    return {
      ...state, cart: cart.map((item:any) => {
        if(payload === item.id) { 
          
          return {...item, qty: item.qty -1}
        }
        return{...item}
      }),
    }
  }

  
  if(type === TOTAL) {
   
   let totalPrice = cart.reduce((total:any,item:any) => {
    
      return total + item.qty * item.amount
    },0)
    return{
      ...state, total: totalPrice.toFixed(2)
    }
  }


  if(type === COUNTER) {
   let counter = cart.reduce((total,item:any) => {
      return total + item.qty 
    },0)
    return{
      ...state, itemCounter: counter
    }
  }

  return state
};
export default reducer
