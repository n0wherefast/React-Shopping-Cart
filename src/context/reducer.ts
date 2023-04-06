import React from 'react'
import {ADD_TO_CART} from './action';

const reducer = (state:any,action:any ) => {
  if(ADD_TO_CART){
    return state.cartS.push(action.payload)  
  }

  return state
};
export default reducer
