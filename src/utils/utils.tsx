import React from 'react'
import { Link } from 'react-router-dom'
interface Utils {
  title:string
  className: string
  click:string
}

 export function Button(props:Utils) {
  const {title,className,click} = props
  return (
    
    <Link to={click}>
   <button className={className}>{title}</button>
   </Link>
  )
 }
 