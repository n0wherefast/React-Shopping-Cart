import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/context";
import useFetch from "../utils/useFetch";
import { key } from "../../key";
import Lottie from 'react-lottie'
import animationData from '../assets/animation/125544-books.json'


function BookPage() {
  const { AddToCart, qty, cart, handleBook,book }: any = useGlobalContext();
  const { id } = useParams();
  const [data, loading] = useFetch(`https://www.googleapis.com/books/v1/volumes/${id}?key=${key}`
  );

  const title = data && data.volumeInfo.title;
  const description = data && data.volumeInfo.description.replace( /(<([^>]+)>)/ig, '') ;
  const author = data && data.volumeInfo.authors ;
  const thumbnail = data && data.volumeInfo.imageLinks.thumbnail;

  

  let amount = data && data.saleInfo.listPrice && data.saleInfo.listPrice.amount;
  let currency  = ''
  if (amount  === undefined) {
    amount = 0;
  } else {
    currency = data && data.saleInfo.listPrice.currencyCode === "EUR" ? "€" : '';
    amount = data && data.saleInfo.listPrice.amount 
  }
let free = amount === 0 ? 'free' :null
let price = free === 'free' ? free : amount +' '+ currency
  useEffect(() => {
    handleBook({ id, title, description, thumbnail, amount, qty:book.qty })
  }, [data, cart, qty]);

  return (
    <article className="flex flex-col items-center mt-20">

      {loading ? <>
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData: animationData,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
          },
        }}
        width={150}
        height={150} /><div className=' text-cyan-700 font-black flex justify-center'>LOADING...</div>
        </>
        :        
        <>        
        <h1 className="text-2xl font-bold">{title}</h1>
        <h2 className="flex p-2" >{author.map((item:any,index:number)=>(
          <p key={index} className="mr-2">{item}</p>
        ))}</h2>
        <div className="flex flex-col  items-center lg:border-2 ">
              <div className="flex flex-col items-center gap-10 lg:flex-row   ">
                    <img className=" w-56 p-2 bg-slate-700 lg:h-96 lg:w-auto lg:ml-5 " src={thumbnail} alt={title} />
                    <div>
                    <p className=" font-medium text-justify w-92 m-3">{description}</p>
                    <div className="flex items-center">
                       <div className=" font-semibold text-lg p-2 m-2 text-white bg-teal-600 rounded-2xl">{price}</div>
                        <button
                          className=" bg-rose-600 rounded-2xl text-slate-100 font-medium p-2 h-11 shadow-2xl hover:bg-red-700"
                          onClick={() => AddToCart(book)}
                        > Add To Cart
                        </button>
                        </div>                    
                    </div>                    
              </div>              
        </div>
          
        </>}
      
    </article>
  );
}

export default BookPage;
