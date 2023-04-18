import React, { useState } from 'react'
import Carousel from './Carousel'
import useFetch from '../utils/useFetch'
import BookItem from './BookItem'
import { Book } from "../utils/typesInterface"
import {key} from '../../key'
import { Link } from 'react-router-dom'
import Lottie from 'react-lottie'
import animationData from '../assets/animation/125544-books.json'
import animationDataNot  from '../assets/animation/73388-empty-cart.json'


function Home():JSX.Element {
  const [search,setSearch] = useState('book')
  const [data, loading] = useFetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&filter=partial&key=${key}+&maxResults=40`)



  let books = data!&&data!.items?.map((book:any,index:number,) => {
      let amount = book.saleInfo.listPrice&&book.saleInfo.listPrice.amount + ' '+ '€'
      const {title,description,subtitle,publisher,authors}:Partial<Book> = book.volumeInfo
      const image =book.volumeInfo.imageLinks&&book.volumeInfo.imageLinks.smallThumbnail
      const  newTitle = title!.length >25 ?  title!.slice(0,15) : title
      
      if(amount! === undefined){
         amount = 'Free'
      }
    
    return (<Link key={book.id} to={`/Shoppage/${book.id}`}>
              <BookItem
                classNameSec={'text-xs m-2   flex items-center h-auto w-[355px] justify-between bg-slate-300 hover:bg-slate-800 shadow-2xl hover:text-white'}
                classNameDiv={'flex flex-col w-full h-[150px] justify-between items-center'}
                classNameH1={'m-1  w-full text-base font-semibold p-1  flex justify-center'}
                classNameH2={'w-full font-medium text-xs flex justify-center'}
                classNameH3={'w-full p-1 flex justify-center'}
                classNamePrice={' bg-teal-600 rounded-lg w-[59px] p-1 m-2 flex justify-center'}
                title={newTitle}
                alt={subtitle}
                description={description}
                subtitle={subtitle}
                publisher={publisher}
                authors={authors}
                image={image.replace('http','https')}
                amount={amount} 
                id={0} 
            />               
           </Link>)
    })
 
    const  HandleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
       return setSearch(e.target.value)
      }

        if(search === ''){
          setSearch('book')
        } 
  return (
    <div className='flex flex-col items-center w-full h-full'>
        <div className=' mt-20 bg-slate-600 pt-1 pb-1 w-full md:w-[700px] shadow-xl lg:mt-20 lg:p-0'><Carousel/></div>        
        <input className='w-1/1 h-1/1 m-2 rounded-lg text-sm pl-2 border-2 border-teal-600' type="text" placeholder='Search...' onChange={HandleChange} />
        <div className=' flex flex-wrap justify-center items-center w-full  bg-slate-100'>
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
              <div className=' text-cyan-700 font-black flex justify-center'>LOADING...</div>
              </div> : books === undefined ? <div className=' text-lg font-black text-pink-600'> 
                <Lottie
              options={{
                loop: true,
                autoplay: true,
                animationData: animationDataNot,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice",
                },}}
                width={150}
                height={150} 
              /> BOOK NOT FOUND</div> :books }      
        </div>   
    </div>   
  )
}

export default Home

