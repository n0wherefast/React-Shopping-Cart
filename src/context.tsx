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
    const cart:string[] = ['CART']
    const HandleClick = ({amount,title,description,thumbnail}:Book) => {
        setBook({amount,title,description,thumbnail})
        // console.log('prova')
    }
    return <AppContext.Provider value={{HandleClick,cart,book}}>
            {children}
          </AppContext.Provider>
   }


const useGlobalContext = () => {
    return useContext(AppContext) 
}


export {AppProvider, useGlobalContext}