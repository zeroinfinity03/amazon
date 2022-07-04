import React,{useState} from "react";

function Cart({ cart }) {
  return (
    <>
      {cart.cart.length == 0 ? (
        <div>There is no product in cart</div>
      ) : (
        cart.cart.map((ele) => {
          return (

            
            <div className="border-2 bg-yellow-300 rounded-lg m-12 flex p-0.5  items-center justify-center mx-48 space-x-20 ">

            <img src={`${ele.image}`} className="w-[200px] h-[200px] p-1" />


              <div className="font-bold">
                <h1 className="flex justify-center"> Price</h1>
                <h1 className="flex justify-center"> {ele.price}</h1>
              </div>


              <div className="font-bold justify-center">

                <h1 className="flex justify-center">Quantity:</h1>

                <div className="flex justify-center">
                <button className="border-2 border-black px-2" onClick={()=>cart.addToCart(ele)}>+</button>
                </div>
                <h1 className="flex justify-center">{ele.quantity}</h1>

                <div className="flex justify-center">
                <button className=" border-2 px-2 border-black" onClick={()=>cart.deleteToCart(ele)}>-</button>
                </div>

              </div>



              <div className="font-bold">
                <button
                  className="m-2 border-2 border-black bg-yelow-400 rounded p-0.58"
                  onClick={() => cart.removeFromCart(ele)}>
                  Delete from cart
                </button>
              </div>

              <div className="font-bold">
                <button>Total Price</button>
                <h1>{ele.quantity*ele.price}</h1>
              </div>



            </div>
          );
        })
      )}
    </>
  );
}

export default Cart;

// hi there
