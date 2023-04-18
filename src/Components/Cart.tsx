import { useGlobalContext } from '../context/context'
import Counter from '../utils/Counter'
import { ImBin } from "react-icons/im";
import Total from './Total'
import BookItem from './BookItem'
import Lottie from 'react-lottie'
import animationData from '../assets/animation/73388-empty-cart.json'
import { Book } from '../utils/typesInterface'



function Cart() {
  const {cart,RemToCart,book,totalPrice}:object | any  = useGlobalContext() 
  // console.log(cart)
   
    const carts = cart?.map((el:Partial<Book>,index:number) =>{
      const  newTitle = el&&el.title!.length >25 ?  el&&el.title!.slice(0,15) : el&&el.title
       const price = el.amount +' ' +' €'
      // console.log(el.qty)
      return <BookItem
                  classNameSec={' bg-teal-400  flex justify-start items-center w-[330px] h-[60px] shadow-2xl'}
                  classNameDiv={'flex p-1 justify-center items-center w-full h-full'}
                  classNamePrice={'bg-teal-600 flex item-center justify-center w-[70px] rounded-lg p-1 m-1'}
                  classNameH1={'m-1 font-semibold'}
                  key={index}
                  title={newTitle}
                  amount={price} 
          >
                  <Counter  books={el}  />  
                    <button className ='w-[26px] h-[28px] bg-red-500 m-1 rounded-lg font-bold hover:bg-red-700 flex justify-center items-center'
                    onClick={()=> RemToCart(el.id)}><ImBin/>
                  </button>
              </BookItem>
      
      })


  return(
    <>
   {cart.length === 0 ?  <div className=' p-20 h-full'>
   <Lottie
   options={{
     loop: true,
     autoplay: true,
     animationData: animationData,
     rendererSettings: {
       preserveAspectRatio: "xMidYMid slice",
     },}}
     width={150}
     height={150} 
   />
   <div className=' text-cyan-700 font-black flex justify-center'>The cart is empty...</div>
   </div> : 

    <article className=' flex flex-col justify-between h-[80%] items-center mt-2 ' >
      <h1 className=' text-3xl text-teal-600 font-black p-2'>CART</h1>
      <section className=' flex flex-col  items-center  m-2 p-1  min-w-[90%]   h-[100%] '>
        <div className=' text-start flex flex-col gap-2 overflow-y-auto shadow-xl h-80 '>{carts}</div>      
      <div className=' fixed bottom-1 flex flex-col justify-start items-center shadow-xl  w-full p-2 m-'><Total/></div>
      </section>    
    </article>
  }
  </>)
}

export default Cart
