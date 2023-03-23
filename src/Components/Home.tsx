import React from 'react'
import Carousel from './Carousel'
import useFetch from '../utils/useFetch'
import {key} from '../../key'
 


function Home() {
    // const {data, loading} = useFetch(`https://www.googleapis.com/books/v1/volumes?q=react&filter=partial&key=${key}+&maxResults=40`)
    // console.log( data! && data!.items[0].volumeInfo.imageLinks.smallThumbnail)
    // let imgr = data! && data!.items[0].volumeInfo.imageLinks.smallThumbnail
  return (
    <div className=' w-full'>
        <div className='p-2'><button className=' z-0 bg-amber-400'>Shop</button> <Carousel/></div>
      
        
        
    
    </div>
        

   
  )
}

export default Home

