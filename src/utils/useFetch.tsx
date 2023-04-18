import  { useEffect, useState } from 'react'
import { Data,Loading } from './typesInterface'

export default function useFetch(url:string) {
    const [loading,setLoading] = useState<Loading>(true)
    const [data,setData] = useState<Data>()

    useEffect(()=>{
    const fetchData = async() =>{
       const response = await fetch(url);
       const json = await response.json()
        setLoading(false) 
        setData(json)
    }

    fetchData()
    },[url])
  return [data , loading ]
}

