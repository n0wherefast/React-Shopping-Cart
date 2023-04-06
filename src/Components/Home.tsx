import React, { useState } from 'react'
import Carousel from './Carousel'
import useFetch from '../utils/useFetch'
import BookItem from './BookItem'
import { Book } from '../context/context'
import {key} from '../../key'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context/context'
import Lottie from 'react-lottie'
import animationData from '../assets/animation/125544-books.json'


function Home() {
  const [search,setSearch] = useState('book')
  const [data, loading] = useFetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&filter=partial&key=${key}+&maxResults=40`)
  // console.log(  data! && data!.items)
  const{}:any = useGlobalContext()
  
  let books = data!&&data!.items.map((book:any,index:number,) => {
      let amount = book.saleInfo.listPrice&&book.saleInfo.listPrice.amount + ' '+ book.saleInfo.listPrice.currencyCode 
      const {title,description,subtitle,publisher,authors}:Book = book.volumeInfo
      const {smallThumbnail,thumbnail} = book.volumeInfo.imageLinks
      const  newTitle = title.length >25 ?  title.slice(0,15) : title
      // const setStyleAuth = authors.length > 20 ? 

      if(amount! === undefined){
         amount = 'Free'
      }
      console.log()
    return <Link key={book.id} to={`/Shoppage/${book.id}`}>
              <BookItem
              title={newTitle}
              description = {description}
              subtitle = {subtitle}
              publisher = {publisher}
              authors = {authors}
              image = {smallThumbnail}
              amount = {amount}
              />               
           </Link>
    })
 
    const  HandleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
      }

if(search === '') return setSearch('book')

    // console.log(search)
  return (
    <div className='flex flex-col items-center w-full h-full bg-teal-200 '>
        <div className='w-full md:w-[700px]'><Carousel/></div>        
        <input className='w-1/1 h-1/1 m-2 rounded-lg text-sm pl-2 border-2 border-teal-600' type="text" placeholder='Search...' onChange={HandleChange} />
        <div className=' flex flex-wrap justify-center items-center w-full  bg-teal-200  '>
            {loading? <div className='  h-full'>
              <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: animationData,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },}}
                width={150}
                height={150} 
              />
              </div> : books}      
        </div>   
    </div>   
  )
}

export default Home

