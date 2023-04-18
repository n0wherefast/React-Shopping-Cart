import { HiPlusSm,HiMinusSm } from "react-icons/hi";
import { useGlobalContext } from '../context/context'
import {Book} from '../utils/typesInterface'



function Counter({books}:Partial<Book>) {
  const {qty,id}:number| any = books
  const {decrease,increase,RemToCart}:object | any  = useGlobalContext()
 

const  checkQti = (id:string) =>{
  if (qty <= 1){
    return RemToCart(id)
  }else {decrease(id)}

}
 
  return (
    <div className='flex m-1' >
      <button className=' bg-teal-300  w-6 rounded-l-lg flex justify-items-center items-center'
         onClick={()=>increase(id)}><HiPlusSm/>
      </button>
      <div className='w-8 bg-white flex justify-center items-center font-semibold'>{qty}</div>
      <button className=' bg-red-500  w-6 h-7 rounded-r-lg flex justify-center items-center'
        onClick={()=> checkQti(id)}><HiMinusSm/>
        </button>
    </div>
  )
}

export default Counter
