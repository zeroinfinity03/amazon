import React from 'react'

function PantComp({data}) {
  return (
    
     <>
      <div className="flex flex-wrap p-4 justify-center">
        {data.pantData.map((ele) => {
          return (
            <>
              <div className="border-2 rounded-lg m-4 ">
                
                  <img src={`${ele.image}`} className='w-[200px] h-[180px] p-2'/>
                
                  <h1 className="bg-cyan-500 flex justify-center">{ele.title}</h1>
                  
                  <h1>{ele.price}</h1>

                  <h1>{ele.quantity}</h1>

                  <div className="flex justify-center">
                  <button className="m-2  bg-yellow-400 rounded-xl p-2" onClick={()=>data.addToCart(ele)}>Add to Cart</button>
                  </div>
                  
              </div>
            </>
          );
        })}
      </div>
   
  </>
  )
}

export default PantComp