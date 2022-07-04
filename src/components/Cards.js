import React from "react";
import data from "../Object.js";
import { useState } from "react";
// import logo1 from "./images/logo1.png";
// import logo from "./images/logo2.png";

// array.map acts as callbacks
// let arr=[1,2,3,4]
// arr.map((ele,idx)=>console.log(ele,idx))
// `${}`=>string value , aur yeh js hai toh use {} again

export default function Cards({ inputState }) {
  let filterdata = data.filter((ele) =>
    ele.type.includes(inputState.inputState.toLowerCase())
  );

  return (
    <>
      <div className="flex flex-wrap p-4 justify-center">
        {filterdata.length == 0
          ? data.map((ele) => {
            return (
              <>
                <div className="border-2 rounded-lg m-4 ">
                  <img
                    src={`${ele.image}`}
                    className="w-[200px] h-[180px] p-2"
                  />

                  <h1 className="bg-cyan-500 flex justify-center">
                    {ele.title}
                  </h1>

                  <h1>{ele.price}</h1>

                  <h1>{ele.quantity}</h1>

                  <div className="flex justify-center">
                    <button
                      className="m-2  bg-yelow-400 rounded-xl p-2"
                      onClick={() => inputState.addToCart(ele)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </>
            );
          })
          : filterdata.map((ele) => {
            return (
              <>
                <div className="border-2 rounded-lg m-4 ">
                  <img
                    src={`${ele.image}`}
                    className="w-[200px] h-[180px] p-2"
                  />

                  <h1 className="bg-cyan-500 flex justify-center">
                    {ele.title}
                  </h1>

                  <h1>{ele.price}</h1>

                  <h1>{ele.quantity}</h1>

                  <div className="flex justify-center">
                    <button
                      className="m-2  bg-yellow-400 rounded-xl p-2"
                      onClick={() => inputState.addToCart(ele)}>

                      Add to Cart
                    </button>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </>
  );
}



// dekho 0 hai toh data wala hi dikha do nhi toh filtered data wala dikha do