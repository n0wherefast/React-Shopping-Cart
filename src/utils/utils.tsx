import React,{ReactElement} from 'react'
import { Link } from 'react-router-dom'

interface Utils {
  title:string | ReactElement 
  className?: string
  click:string
  counter?: any
}

 export function Button({title,className,click,counter}:Utils) {

  const count = counter&&counter.props.children !== 0 ?  counter :null


  return (
    
    <Link to={click}>
   <button className={className}>{title} {count} </button>
   </Link>
  )
 }
 