import React, { useEffect, useState } from 'react'
import {key} from '../../key'

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': `${key}`,
// 		'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
// 	}
// };
interface Data {
  items:object
  volumeInfo:any
}


export default function useFetch(url:string) {
    const [loading,setLoading] = useState(true)
    const [data,setData] = useState<any>()

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

