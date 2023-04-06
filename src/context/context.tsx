import {useState, useContext, createContext, useEffect,useReducer,} from "react";
import reducer from "./reducer";
import {ADD_TO_CART} from "./action";

const AppContext = createContext({});

export interface Book {
  amount: string;
  title: string;
  description: string;
  thumbnail?: string;
  image?: string;
  quantity?: number;
  subtitle?: string;
  publisher?: string;
  authors?: string;
}

interface Props {
  children: JSX.Element;
}
const initialState: any = {
  cartS: [],
  total: 0,
  itemCounter: 0,
};

const AppProvider = ({ children }: Props) => {
  const [quantity, setQuantity] = useState(1);
  const [book, setBook] = useState<Book>({
    title: "",
    description: "",
    thumbnail: "",
    amount: "",
    quantity: quantity,
  });
  const [caRt, setCart] = useState<object[]>([]);
  const [state, dispatch] = useReducer(reducer, initialState);
  
//  console.log(state)

                              ///Quantity///
  const increase = () => {
    setQuantity(quantity + 1);
  };
  const decrease = () => {
    setQuantity((oldValue) => {
      if (oldValue - 1 === 0) {
        return oldValue;
      }
      return oldValue - 1;
    });
  };
                                 /// Quantity//

                               ///BooKPage///
  const AddToCart = (book: Book) => {
    dispatch({type:ADD_TO_CART,payload:book})
    // const add = [...cart, book];
    // setCart(add);
  };
                                 ///BooKPage ///

                                /// Cart///
  const RemToCart = () => {
    setCart((item) => item.filter((_, index) => index !== 0));
  };
                               /// Cart///

  //    console.log(book)
  return (
    <AppContext.Provider
      value={{
        ...state,
        AddToCart,
        caRt,
        setBook,
        book,
        RemToCart,
        quantity,
        decrease,
        increase,
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
