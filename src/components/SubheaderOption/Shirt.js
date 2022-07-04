import React from 'react'
import data from '../../Object.js'
import ShirtComp from './ShirtComp.js'

function Shirt({addToCart}) {
console.log(data)
  let shirtData=data.filter((ele)=>ele.type=="shirt")
  
  
  return (
    <>
    <ShirtComp data={{shirtData,addToCart}}/>
    </>   
  )
}

export default Shirt




// Object Rendering :- dyanamic way of inserting data and data or the collection of data is in the format of array of objects.

// To filter out something from an array use :- array.filter

// To pass infromation from one parent componenet to child componenet we use props.
