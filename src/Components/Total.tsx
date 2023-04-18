import { useGlobalContext } from '../context/context'

function Total() {
  const {total,itemCounter}:object | any  = useGlobalContext()


const sendOrder = () => {
  let msg = `Order Sended! Books:${itemCounter} Total Price:${total}`
  return alert(msg)
}
  return (
    <>
      <div className=' border-b-2 border-slate-800 w-72 flex justify-center p-2 m-1'><h2 className=' text-xl font-black  '>TOTAL</h2> </div>
      <hr/>
      <div className='border-b-2 border-slate-800 w-72 flex justify-center p-2 m-1'><p>{total}€ </p></div>
      <hr />
      <button className=' bg-pink-400 p-2 m-1 font-medium rounded hover:bg-pink-700' onClick={sendOrder}>Check Out</button>
    </>
  )
}

export default Total
