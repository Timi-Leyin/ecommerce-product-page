
import { Fragment, useState } from 'react';
// import Cart from './Components/Cart/Cart';
import Product from './Components/Product/Product';
import Header from './Layouts/Header/Header';
import './Styles/global.scss'


type QuantityFn = (type:string)=> void
export interface TypeCart {
  quantity:number,
  price:number
}

function App() {
  let [quantity,changeQuantity] = useState(0);
  let [cart,setCart] = useState<TypeCart>({quantity:0,price:0})
const addToCart = ()=>{
  setCart({...cart,quantity,price:125})
  console.log(cart)
}

    const setQuantity:QuantityFn = (type)=>{
        if(type == 'minus') changeQuantity(quantity>=1 ? quantity-1: 0) 
        if(type == 'plus')  changeQuantity(quantity+1)
    }
  return (
    <Fragment>
   <Header cart={cart} setCart={setCart} />
   <Product quantity={quantity} setQuantity={setQuantity} onAddToCart={addToCart} />
    </Fragment>
  );
}

export default App;
