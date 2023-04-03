import {useState,useContext,createContext} from 'react'


const AppContext = createContext({})

interface Book {
    amount:string,
    title:string,
    description:string,
    thumbnail:string,
}

const AppProvider = ({children}:any) => {
    const [book,setBook] = useState<Book>()
    const [cart,setCart] = useState<object[]> ([])
    
    // const HandleClick = () => {
    //     // setBook({amount,title,description,thumbnail})
    // }

    // console.log()

    //////////////////// BooKPage

    const AddToCart = (book:Book) => {
        const add = [...cart,book]
        setCart(add)
    }
   ///////////////////// BooKPage 

   ///////////////////// Cart

const RemToCart = () => {   
   setCart(item => item.filter((_, index) => index !==0))
 } 
   ///////////////////// Cart 





    // console.log(children)
    return <AppContext.Provider value={{AddToCart,cart,setBook,book,RemToCart}}>
            {children}
          </AppContext.Provider>
   }


const useGlobalContext = () => {
    return useContext(AppContext) 
}


export {AppProvider, useGlobalContext}