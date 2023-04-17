import React from 'react'
import { Book } from '../context/context'

function BookItem({subtitle,publisher,authors,image,description,title,amount,children,classNameSec,classNameDiv,classNameH1,classNameH2,classNameH3,classNamePrice}:Book) {
   
  return (
    
        <section className={classNameSec}
                                          //  
                      //  className='text-xs m-2 pt-2 pb-2  rounded-xl border-2 border-teal-800 flex flex-col items-center  w-[140px] h-[235px]  justify-center bg-amber-300 hover:bg-slate-800 shadow-2xl'
                    >
                      <img className=' h-[140px]' src= {image} alt={subtitle} />
                      <div className={classNameDiv}> 
                        <h1 className={classNameH1}>{title}</h1>
                        <h2 className={classNameH2}>{authors}</h2>
                        <h3 className={classNameH3}>{publisher}</h3>
                        <div className={classNamePrice}>{amount}</div>
                       <div className=''>{ children ? children[0] : null}</div> 
                       <div className=''>{children ? children[1] : null}</div>
                        
                      </div>
                      
                       {/* <section 
                         className={'bg-red-700 rounded-lg p-1 font-medium m-1 hover:bg-red-500'}
                         title='Add To Cart'
                         
                       >Add To Cart
                       </section> */}
                </section>
      
    
  )
}

export default BookItem
