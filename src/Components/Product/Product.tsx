
import './product.scss';
import iconPlus from '../../Assets/images/icon-plus.svg';
import iconMinus from '../../Assets/images/icon-minus.svg';
import { useState } from 'react';


type QuantityFn = (type:string)=> void



const ProductQuantity=()=>{
    let [quantity,changeQuantity] = useState(0);

    const setQuantity:QuantityFn = (type)=>{
        if(type == 'minus') changeQuantity(quantity>=1 ? quantity-1: 0) 
        if(type == 'plus')  changeQuantity(quantity+1)
    }
    return(
        <div className="product-actions">

        <div className="quantity">
        <span className="minus-quantity  cursor-pointer" onClick={()=> setQuantity('minus') }><img src={iconMinus} alt="minus product quantity" /></span>
        <span className="quantity-no">{quantity}</span>
        <span className="plus-quantity cursor-pointer" onClick={()=> setQuantity('plus')}><img src={iconPlus} alt="plus product quantity" /></span>
    </div>

     <button className='add-cart-btn' disabled={quantity < 1 && true }>
<span>Add to cart</span>
     </button>

    </div>
    )
}

// product info
export const ProductInfo = () => {
  return (
    <div className="product_information">
  <div>
  <h6 className="product-owner">Sneaker Company</h6>
        <h1 className='product-name'>Fall Limited Edition Sneakers.</h1>
        <p className="product-description small">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis explicabo distinctio dolores esse dicta corrupti, exercitationem architecto iure quasi. Veritatis.
        </p>
  </div>

        <div className="product-price">
            <div>
                <h3 className="new-price">$125.00</h3>
                <div className="discount small">50%</div>
            </div>
            <h4 className='old-price'>$250.00</h4>
        </div>

       
   <ProductQuantity />
        
    </div>
  )
}

// PRODUCT DISPLAY

export const ProductDisplay = () => {
    return (
      <div className="product_display">display</div>
    )
  }
  


const Product = () => {
  return (
   <section id="product">
     <ProductDisplay />
     <ProductInfo />
   </section>
  )
}

export default Product