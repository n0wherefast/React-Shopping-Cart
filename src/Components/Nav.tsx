import React from 'react'
import { Button } from '../utils/utils'

function Nav() {
  return (
    <div className=' text-2xl backdrop-blur-3xl bg-teal-500 rounded-3xl m-3 -2xl w-full flex items-center justify-between p-2 '>
             <h1>BookShop</h1> 

             <div className='flex '>
            <Button
                click = {'/'}
                title = {'Home'}
                className = {' text-xl text-white bg-amber-400 p-2 m-2 rounded-2xl flex items-center justify-center hover:bg-red-900 cursor-pointer'}
            />
             <Button
                click = {'/#/Shoppage'}
                title = {'Shop'}
                className = {' text-xl text-white bg-amber-400 p-2 m-2 rounded-2xl flex items-center justify-center hover:bg-red-900 cursor-pointer'}
            /> 
             </div>
           
    </div>
  )
}

export default Nav
