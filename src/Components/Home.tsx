import React, { useState } from 'react'
import Carousel from './Carousel'
import useFetch from '../utils/useFetch'
import {key} from '../../key'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'




function Home() {
  const [search,setSearch] = useState('book')
  const [data, loading] = useFetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&filter=partial&key=${key}+&maxResults=40`)
  // console.log(  data! && data!.items)

  
  const {HandleClick} = useGlobalContext()

  let books = data!&&data!.items.map((book:any,index:number,) => {
      let amount = book.saleInfo.listPrice&&book.saleInfo.listPrice.amount + ' '+ book.saleInfo.listPrice.currencyCode 
    
      if(amount! === undefined){
         amount = 'Free'
      }
      const {title,description} = book.volumeInfo
      const {smallThumbnail,thumbnail} = book.volumeInfo.imageLinks
      // console.log(book)
    return <Link key={book.id} to={`/Shoppage/${book.id}`}>

                <button className='text-xs m-2 pt-2 pb-2  rounded-xl border-2 border-teal-800 flex flex-col items-center  w-[140px] h-[235px]  justify-center bg-amber-300 hover:bg-slate-800 shadow-2xl'
                      onClick={()=> HandleClick({amount,title,description,thumbnail})}
                    >
                      <img className='m-1 h-[105px]' src= {smallThumbnail} alt={description} />
                      <div className=' bg-green-600 rounded-lg p-1'>{amount}</div>
                      <div className='m-1 bg-cyan-700 p-1 w-full font-bold flex justify-center '>{title}</div>
                       {/* <button 
                         className={'bg-red-700 rounded-lg p-1 font-medium m-1 hover:bg-red-500'}
                         title='Add To Cart'
                         
                       >Add To Cart
                       </button> */}
                </button>   
                
           </Link>
    })
 
    const  HandleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
      }

if(search === '') return setSearch('book')

    // console.log(search)
  return (
    <div className=' w-full h-full '>
        <div className='w-full'><Carousel/></div>
        <input className='w-1/1 h-1/1 m-2 rounded-lg text-sm pl-2' type="text" placeholder='Search...' onChange={HandleChange} />
        <div className=' flex flex-wrap justify-center items-center  m-1 '>
            {books}     
        </div>   
    </div>   
  )
}

export default Home

