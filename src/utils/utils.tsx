import React,{ReactElement} from 'react'
import { Link } from 'react-router-dom'
interface Utils {
  title:string | ReactElement 
  className?: string
  click:string
}

 export function Button({title,className,click}:Utils) {
  // const {title,className,click} = props

  return (
    
    <Link to={click}>
   <button className={className}>{title}</button>
   </Link>
  )
 }
 