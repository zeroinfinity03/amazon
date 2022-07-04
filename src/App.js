import Header from './components/Header.js'
import Subheader from './components/Subheader.js'
import Cards from './components/Cards.js'

import Cart from './components/Cart.js'

import Pant from './components/SubheaderOption/Pant.js';
import Shirt from './components/SubheaderOption/Shirt.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { useState } from 'react';

function App() {

  let [inputState, setInputState] = useState('')

  const [cart, setCart] = useState([])
  // we are making this state so that we can implement addtocart funcationality.
 // ab is cart varibale me abhi empty array hai isme kuch product add karne ke liye ek fn banaya addToCart aur isme jo argument aayega woh object hai jo ki Object.js me data naam se hai lekin usko humlog use ele ke naam se use kar rhe hain. toh humko yahan argument me ele daalna hai aur woh ele hai cards me toh cards me hum addToCart ko call kar lenge aur ele pass kar denge. lekin addToCart whan call karne ke liye addTocart ko whan bhejna toh hoga aur bhejne ke liye we use inputState.

  

  function addToCart(product) 
  {
    // NOW hum check karnge ki jis product pe click kiye hain woh already cart me hai yaa nhi agar hai then if part chalega aur cart ki value i.e. quantity increase karenge lekin woh increase hoga kiski madad se?? setCart ki madad se.
    
    const productinCart = cart.find((ele) => ele.id === product.id)

    if(productinCart)
    {
      if(productinCart.quantity<productinCart.totalquantity){
      setCart(cart.map((ele)=>ele.id===product.id? {...productinCart,quantity:productinCart.quantity+1}:ele))
      }
    }
    else{
      setCart([...cart,{...product, quantity:1}])
    }

  }



  function deleteToCart(product)
  {
    const iteminDeltoCart=cart.find((ele)=>ele.id===product.id)
    if(iteminDeltoCart.quantity===1)
    {
      setCart(cart=>cart.filter(ele=>{return ele.id!==iteminDeltoCart.id}))
    }
    else{
      setCart(cart.map((ele)=>ele.id===product.id?{...iteminDeltoCart,quantity:iteminDeltoCart.quantity-1}:ele))
    }
  }


  function removeFromCart(product)
  {
    setCart(cart.filter(ele=>ele.id!=product.id))
  }


  return (
    <BrowserRouter>

      <>
        <Header setInputState={{setInputState,cart}} />
        <Subheader />
        <Routes>
          <Route path='/shirt' element={<Shirt addToCart={addToCart}/>} />
          <Route path='/pant' element={<Pant addToCart={addToCart}/>} />
          <Route path='/' element={<Cards inputState={{inputState,addToCart}} />} />
          <Route path='/cartPage' element={<Cart cart={{cart,addToCart,deleteToCart,removeFromCart}}/>} />
        </Routes>

      </>

    </BrowserRouter>
  );
}

export default App;







// ROUTER NOTES:-


// router install -   npm install react-router-dom

// import {BrowserRouter,Routes,Route} from 'react-router-dom'

// then function ke ander return ke baad sabko in dono ke ander rakh do:-

// <BrowserRouter></BrowserRouter>

// then we will use:-  <Routes> </Routes>
// Ab indono ke beech me hum jitne bhi routes hain woh bta sakte hain. as for example:-

// <Route path="/movies" element={
// <>
//     <Banner/>
//     <Movies/>
// </>
// } 
// />

// yahan hum yeh bta rhe hain ki is path ke liye hume kya dikha hai? yahan hum banner aur movies component me dikha rhe hain.

// Lekin hume toh click pe dikhana hai. toh Movie wale div ko Link to bna do jo navbar me hai aur navbar me we have to import also. example:-

// import { Link } from 'react-router-dom'

// <Link to="/movies" className='text-blue-400 font-bold text-xl md:text-3xl'>Movie</Link>

// Toh ab Movie pe click karenge toh url ke last me apne app
// /movies aaa jayega aur  /movies pe kya dikhana hai woh pehle hi bta chuke hain.

// *NOTE:- if we only use / like:-

// <Link to="/" className='text-blue-400'>Movie</Link>
//  & obviously in app.js we have to use:-

// <Route path='/' element={<xyz/>} />

// Then the homepage will show the component xyz by default. 
// i.e. jub hum website kholenege toh jo components fixed hain yaa routes me nhi hain who toh dikhega hi unke  saath xyz
// xyz bhi dikhega. Xyz woh component rakhenge jo homepage pe dikhana chahte hain.





