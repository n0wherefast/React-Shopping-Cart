import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../context'
import useFetch from '../utils/useFetch'
import { key } from '../../key'



function BookPage() {
  const {AddToCart,book,setBook}:any = useGlobalContext()
  const {id} = useParams()
  const [data,loading] = useFetch(`https://www.googleapis.com/books/v1/volumes/${id}?key=${key}`)
  // const bookInfo = data&&data.volumeInfo
 

   const title = data&&data.volumeInfo.title
   const description = data&&data.volumeInfo.description
   const thumbnail = data&&data.volumeInfo.imageLinks.thumbnail
   

   let amount = data&&data.saleInfo.listPrice&&data.saleInfo.listPrice.amount 
  if (amount === undefined) {
    amount = 'free'
  } else{
    amount = data&&data.saleInfo.listPrice.amount+ ' '+ data.saleInfo.listPrice.currencyCode 
  }
  useEffect(()=> {
    setBook({title,description,thumbnail,amount})
  },[data])
  
    console.log(data);


  return (<article className='flex flex-col items-center gap-4 bg-teal-700 '>
    
            <h1 className=' text-3xl font-bold'>{title}</h1>
            <img className=' w-36' src={thumbnail} alt={title} />
            <div className=' font-semibold text-lg'>{amount}</div>
            <button className=' bg-rose-600 rounded-2xl text-slate-100 font-medium p-2 shadow-2xl hover:bg-red-700'
                    onClick={()=> AddToCart(book)} 
                    >Add To Cart
           </button>
            <p className=' font-medium text-justify w-92 m-3'>{description}</p>
         </article>
  )
}

export default BookPage