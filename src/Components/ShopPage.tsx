import React from 'react'
import useFetch from '../utils/useFetch'
import {key} from '../../key'

function ShopPage() {
    const [data, loading] = useFetch(`https://www.googleapis.com/books/v1/volumes?q=react&filter=partial&key=${key}+&maxResults=40`)
    console.log(  data! && data!.items)
   let books = data!&&data!.items.map((elm:any) => elm.volumeInfo.title)
    // let imgr = data! && data!.items[0].volumeInfo.imageLinks.smallThumbnail

  return (
    <div className=' text-xl '>
     {books}
    </div>
  )
}

export default ShopPage
