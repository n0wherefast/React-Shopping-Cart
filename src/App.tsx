import { useState } from 'react'
import { Route,Routes,HashRouter } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import ShopPage from './Components/ShopPage'
import Nav from './Components/Nav'

function App() {
  
  return (
    <div className="bg-slate-300 flex flex-col items-center justify-start  w-full h-screen  p-2  ">
      <Nav/>
      <HashRouter>
        <Routes>
          <Route path='/' element={ <Home/> } />
          <Route path='/Shoppage' element={ <ShopPage/> } />
        </Routes>        
      </HashRouter>
    
      
    </div>
  )
}

export default App
