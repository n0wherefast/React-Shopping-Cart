import React from 'react'
import Carousel from './Carousel'
import useFetch from '../utils/useFetch'
import {key} from '../../key'
import { Link } from 'react-router-dom'



function Home() {
  const [data, loading] = useFetch(`https://www.googleapis.com/books/v1/volumes?q=react&filter=partial&key=${key}+&maxResults=40`)
  // console.log(  data! && data!.items)

  let books = data!&&data!.items.map((book:any,index:number,) => {
     console.log(typeof book)
      const {title,descriprition} = book.volumeInfo
      const {smallThumbnail,thumbnail} = book.volumeInfo.imageLinks
    // console.log(book.id)
  return <Link key={book.id} to={`/Shoppage/${book.id}`}>
              <button className=' text-sm m-1 border-2 border-amber-600 rounded-xl flex flex-col items-center w-[140px] h-[235px]  justify-center bg-amber-300 hover:bg-slate-800' >
                    <img className='m-1 h-32' src={smallThumbnail} alt={title} />
                    <div className='m-1'>{title}</div>
              </button>   
        </Link>
      
  } )
    
  return (
    <div className=' w-full h-full '>
        <div className=''><Carousel/></div>
        <div className=' flex flex-wrap justify-center items-center  m-1 '>
            {books}     
        </div>   
    </div>
        

   
  )
}

export default Home

