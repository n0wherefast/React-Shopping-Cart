import React from 'react'
import { Book } from '../context/context'

function BookItem({subtitle,publisher,authors,image,description,title,amount}:Book) {
  return (
    
        <button className='text-xs m-2   flex items-center  h-[140px] w-[265px] justify-between bg-amber-300 hover:bg-slate-800 shadow-2xl hover:text-white'
                      //  className='text-xs m-2 pt-2 pb-2  rounded-xl border-2 border-teal-800 flex flex-col items-center  w-[140px] h-[235px]  justify-center bg-amber-300 hover:bg-slate-800 shadow-2xl'
                      // onClick={()=> HandleClick(book.id)}
                      // {amount,title,description,thumbnail}
                    >
                      <img className=' h-[140px]' src= {image} alt={subtitle} />
                      <div className='flex flex-col  w-full h-[140px] justify-between items-center'> 
                        <h1 className='m-1  w-full text-base font-semibold p-1  flex justify-center '>{title}</h1>
                        <h2 className=' w-full font-medium text-xs flex justify-center '>{authors}</h2>
                        <h3 className='  w-full p-1 flex justify-center '>{publisher}</h3>
                        <div className=' bg-green-600 rounded-lg w-1/2 p-1 m-2'>{amount}</div>
                      </div>
                      
                       {/* <button 
                         className={'bg-red-700 rounded-lg p-1 font-medium m-1 hover:bg-red-500'}
                         title='Add To Cart'
                         
                       >Add To Cart
                       </button> */}
                </button>
      
    
  )
}

export default BookItem
