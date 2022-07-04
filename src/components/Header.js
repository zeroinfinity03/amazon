import React from 'react'
import { Link } from 'react-router-dom'
import logo from './images/logo1.png'

function Header({ setInputState }) {

   function manageInput(e) {
      let { value } = e.target
      setInputState.setInputState(value)
   }

   return (
      <>

         <div className='bg-black p-4 flex'>

            <Link to="/">
               <img className='w-[120px] h-[40px] bg-white pt-2 px-1' src={logo} />
            </Link>

            <div className='text-white px-4'>
               <h6 className='text-sm'>Hello</h6>
               <h2 className='font-bold'>Select your Address</h2>
            </div>

            <input className='rounded pr-96 ml-32' type="text" placeholder='Search your product here' onChange={manageInput} />

            <Link to="/cartPage">
               <div className='flex'>
               <div className='text-white ml-28 mt-4 font-bold'>cart</div>
               <div className='text-red-700 font-bold'>{/*0*/ setInputState.cart.length}</div>
               </div>
            </Link>

         </div>

      </>
   )
}


export default Header



// state manage without redux ke hum kar sakte hain with the help of hooks. like useState , contextapi

// onClick event is used in buttons
// onChange event is used mostly in input boxes.

// propdrilling matlab parent se children me property distribute karna