import './cart.scss'
import cartIcon from '../../Assets/images/icon-cart.svg';
import iconDelete from '../../Assets/images/icon-delete.svg'
import { Fragment, useState } from 'react'




const Cart = () => {
  const [cartStatus,changeCartStatus] = useState(false)
  return (
    <Fragment>

<div className="cart cursor-pointer" onClick={()=> changeCartStatus(!cartStatus)}><img src={cartIcon} alt="cart icon" /></div>


       {
           cartStatus && (
            <div id='cart'>
            <h3 className="head">Cart</h3>
    
            <div className="cart-items">
               <p className="isEmpty small">Your Cart is Empty.</p>
    
    
               {/* <div className="cart-item">
                   <div className="thumbnail"></div>
                   <div className="info">
                <p className="name">Autum Limited Edition... </p>
                <p className='amount small'><span className="price">$125.00 </span> 
                <span role={'img'}>&times;</span>
                <b className="total"> $375.99</b>
    
                </p>
                   </div>
                   <div className="delete">
                       <img src={iconDelete} alt="" />
                   </div>
               </div> */}
            </div>
    
            {/* <button className="checkout-btn cursor-pointer" >Checkout</button> */}
        </div>
           )
       }
    </Fragment>
  )
}

export default Cart