import { Route,Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Cart from './Components/Cart'
import Nav from './Components/Nav'
import BookPage from './Components/BookPage'
import ErrorPage from './Components/ErrorPage'

function App() {
 
  return (
    <article className=" bg-slate-100 flex flex-col items-center justify-start  w-full h-full ">
      <div className=' fixed z-10 w-full'><Nav/></div>
      
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Shoppage' element={<Cart/>} />
          <Route path='/Shoppage/:id' element={<BookPage/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Routes>        
    </article>
  )
}

export default App
