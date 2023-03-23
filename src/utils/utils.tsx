import React from 'react'

 export function Button(props:any) {
  const {title,className,click} = props
  return (
    <a href={click}>
   <button className={className}>{title}</button>
   </a>
  )
 }
 