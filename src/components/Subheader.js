import React from 'react'
import {Link} from 'react-router-dom'
function Subheader() {
  return (
      <>
      <div className='bg-blue-300  flex px-4'>


        <Link to="/shirt" className='text-violet-800 my-3 font-bold  mr-4 px-1  border-2 border-black rounded-xl p-1'>Shirts</Link>
        <Link to="/pant" className='text-violet-800 my-3 font-bold  mr-4 px-1  border-2 border-black rounded-xl p-1'>Pants</Link>
        
      </div>

      </>
   
  )
}

export default Subheader