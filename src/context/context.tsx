import {useState, useContext, createContext, useEffect,useReducer,} from "react";
import reducer from "./reducer";
import { Props,Book,INITIAL_STATE } from "../utils/typesInterface";
import {ADD_TO_CART,
  DELETE_ITEM,
  INCREASE_ITEM,
  DECREASE_ITEM,
  ADD_BOOK,
  TOTAL} from './action';
const AppContext = createContext({});


const initialState: INITIAL_STATE = {
  book:{
    id: 0,
    title:'',
    description: "",
    thumbnail: "",
    amount: "",
    qty:1,
  },
  cart: [],
  total: 0,
  itemCounter: 0,
};

const AppProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
 
  const handleBook = (book:Book) =>{
    //  console.log(book)
    dispatch({type:ADD_BOOK,payload:book})
  }
const totalPrice = () => {
  dispatch({type:TOTAL})
}

///Quantity///
  const increase = (id:string) => {
    dispatch({type:INCREASE_ITEM, payload:id})
  };
  const decrease = (id:string) => {
    dispatch({type:DECREASE_ITEM,payload:id})
   
  };
/// Quantity//

///BooKPage///
  const AddToCart = (book: Book) => {
    dispatch({type:ADD_TO_CART,payload:book})
  };
  ///BooKPage///

/// Cart///
  const RemToCart = (id:string) => {
    dispatch({type:DELETE_ITEM ,payload:id})
  };
/// Cart///

    //  console.log(state.book)
  return (
    <AppContext.Provider
      value={{
        ...state,
        AddToCart,
        RemToCart,
        decrease,
        increase,
        handleBook,
        totalPrice,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
