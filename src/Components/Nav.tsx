import React from 'react'
import { Button } from '../utils/utils'

function Nav() {
    const  HandleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
         console.log(e.target.value)
    }
  return (
    <div className=' text-lg backdrop-blur-3xl bg-amber-300 rounded-2xl m-3 -2xl w-full flex items-center justify-evenly p-2 '>
             <h1 className='pr-2'>BookShop</h1> 

             <div className='flex pl-2 '>
              <input className='w-1/2 m-1 rounded-lg text-sm pl-2' type="text" placeholder='Search' onChange={HandleChange} />
            <Button
                click = {'/'}
                title = {'Home'}
                className = {' text-sm text-white bg-orange-500 p-2 m-1 rounded-xl flex items-center justify-center hover:bg-red-900 cursor-pointer'}
            />
             <Button
                click = {'/Shoppage'}
                title = {'Shop'}
                className = {' text-sm text-white bg-orange-500 p-2 m-1 rounded-xl flex items-center justify-center hover:bg-red-900 cursor-pointer'}
            /> 
             </div>
           
    </div>
  )
}

export default Nav
