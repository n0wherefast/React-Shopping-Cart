import React from 'react'
import { useParams } from 'react-router-dom'

function BookPage() {
  const {id} = useParams()
  return (
    <div>BookPage {id}</div>
  )
}

export default BookPage