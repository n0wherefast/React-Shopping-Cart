import { useState } from 'react'
import { Route,Routes,HashRouter } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import ShopPage from './Components/ShopPage'
import Nav from './Components/Nav'
import BookPage from './Components/BookPage'

function App() {
  
  return (
    <div className=" bg-orange-900 flex flex-col items-center justify-start  w-full h-full  p-2  ">
      <Nav/>
      
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/Shoppage' element={ <ShopPage/> } />
          <Route path='/Shoppage/:id' element={<BookPage/>}/>
        </Routes>        
     
    
      
    </div>
  )
}

export default App
