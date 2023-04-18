import { Button } from '../utils/utils'
import { FiShoppingCart } from "react-icons/fi";
import { useGlobalContext } from '../context/context';


function Nav() {
    const {itemCounter}:object | any  =  useGlobalContext()
  return (
    <article className=' text-lg text-white  bg-slate-800   flex items-center justify-between p-3  '>
             <h1 className='ml-4 font-bold text-2xl'>BookShop</h1> 

             <div className='flex pl-2 '>
            <Button
                click = {'/'}
                title = {'Home'}
                className = {' text-sm font-bold text-white bg-teal-600 p-2 m-1 rounded-xl flex items-center justify-center hover:bg-red-900 cursor-pointer'}
                
            />
             <Button
                click = {'/Shoppage'}
                title = { <div className='m-1' id='cart'> <FiShoppingCart/> </div> }
                className = {' text-sm font-bold text-white bg-teal-600 p-2 m-1 h-9 w-9 rounded-xl flex items-center justify-center hover:bg-red-900 cursor-pointer'}
                counter = {<div className='flex justify-center items-center p-1 bg-red-600 rounded-3xl text-[10px] font-extralight w-4 h-4 relative bottom-2 right-1'>{itemCounter}</div>}
            /> 
             </div>
           
    </article>
  )
}

export default Nav
