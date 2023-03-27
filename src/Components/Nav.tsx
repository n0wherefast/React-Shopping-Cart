import React from 'react'
import { Button } from '../utils/utils'
import { FiShoppingCart } from "react-icons/fi";

function Nav() {
    
  return (
    <article className=' text-lg backdrop-blur-3xl bg-yellow-200 rounded-2xl m-2  flex items-center justify-between p-2 '>
             <h1 className='ml-4 font-bold text-2xl'>BookShop</h1> 

             <div className='flex pl-2 '>
            <Button
                click = {'/'}
                title = {'Home'}
                className = {' text-sm font-bold text-white bg-teal-600 p-2 m-1 rounded-xl flex items-center justify-center hover:bg-red-900 cursor-pointer'}
            />
             <Button
                click = {'/Shoppage'}
                title = {<FiShoppingCart/>}
                className = {' text-sm font-bold text-white bg-teal-600 p-2 m-1 h-9 w-9 rounded-xl flex items-center justify-center hover:bg-red-900 cursor-pointer'}
            /> 
             </div>
           
    </article>
  )
}

export default Nav
