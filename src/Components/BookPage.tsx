import React from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../context'



function BookPage() {
  const {book}:any = useGlobalContext()
  const {id} = useParams()
  console.log(book);
  
  return (
    <div>BookPage {id}</div>
  )
}

export default BookPage