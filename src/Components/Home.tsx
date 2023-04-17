import React, { useState } from 'react'
import Carousel from './Carousel'
import useFetch from '../utils/useFetch'
import BookItem from './BookItem'
import { Book } from "../utils/typesInterface"
import {key} from '../../key'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context/context'
import Lottie from 'react-lottie'
import animationData from '../assets/animation/125544-books.json'


function Home() {
  const [search,setSearch] = useState('book')
  const [data, loading] = useFetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&filter=partial&key=${key}+&maxResults=40`)
  const{}:any = useGlobalContext()
  
  let books = data!&&data!.items.map((book:any,index:number,) => {
      let amount = book.saleInfo.listPrice&&book.saleInfo.listPrice.amount + ' '+ '€'
      const {title,description,subtitle,publisher,authors}:Book = book.volumeInfo
      const {smallThumbnail,thumbnail} = book.volumeInfo.imageLinks
      const  newTitle = title.length >25 ?  title.slice(0,15) : title
      

      if(amount! === undefined){
         amount = 'Free'
      }
      
      console.log()
    return <Link key={book.id} to={`/Shoppage/${book.id}`}>
              <BookItem
              classNameSec ={'text-xs m-2   flex items-center h-[140px] w-[265px] justify-between bg-amber-300 hover:bg-slate-800 shadow-2xl hover:text-white'}
              classNameDiv ={'flex flex-col w-full h-[140px] justify-between items-center'}
              classNameH1= {'m-1  w-full text-base font-semibold p-1  flex justify-center'}
              classNameH2 = {'w-full font-medium text-xs flex justify-center'}
              classNameH3 = {'w-full p-1 flex justify-center'}
              classNamePrice = {' bg-green-600 rounded-lg w-1/3 p-1 m-2 flex justify-center'}
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
              <div className=' text-cyan-700 font-black flex justify-center'>LOADING</div>
              </div> : books}      
        </div>   
    </div>   
  )
}

export default Home

