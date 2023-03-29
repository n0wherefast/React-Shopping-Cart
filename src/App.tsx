import { useState } from 'react'
import { Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Cart from './Components/Cart'
import Nav from './Components/Nav'
import BookPage from './Components/BookPage'
import { useGlobalContext } from './context'
function App() {
  // const prova = useGlobalContext()
  // console.log(prova);
  
  return (
    <article className=" bg-teal-700 flex flex-col items-center justify-start  w-full h-full   ">
      <div className='p-1 w-full'><Nav/></div>
      
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Shoppage' element={<Cart/>} />
          <Route path='/Shoppage/:id' element={<BookPage/>}/>
        </Routes>        
    </article>
  )
}

export default App
