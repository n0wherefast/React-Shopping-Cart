import React from 'react'

function Total() {
  return (
    <div className=' flex flex-col justify-start items-center border-2 border-slate-500 rounded-lg w-full p-2 m-1'>
      <div className=' border-b-2 border-slate-800 w-72 flex justify-center p-2 m-1'><h2 className=' font-medium text-xl'>Total</h2> </div>
      <hr/>
      <div className='border-b-2 border-slate-800 w-72 flex justify-center p-2 m-1'><p>0€ </p></div>
      <hr />
      <button className=' bg-pink-400 p-2 m-1 font-medium rounded hover:bg-pink-700'>Check Out</button>
    </div>
  )
}

export default Total
