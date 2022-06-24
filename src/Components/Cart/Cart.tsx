import './cart.scss'
import cartIcon from '../../Assets/images/icon-cart.svg';
import iconDelete from '../../Assets/images/icon-delete.svg'
import { Dispatch, Fragment, SetStateAction, useState } from 'react'
import { TypeCart } from '../../App';
import thumbnail from '../../Assets/images/image-product-1-thumbnail.jpg'




const Cart = ({cart,setCart}:{cart:TypeCart,setCart:Dispatch<SetStateAction<TypeCart>>}) => {
  const [cartStatus,changeCartStatus] = useState(false)
//   console.log(cart)
  return (
    <Fragment>

<div className="cart cursor-pointer" data-q={cart.quantity} onClick={()=> changeCartStatus(!cartStatus)}><img src={cartIcon} alt="cart icon" /></div>


       {
           cartStatus && (
            <div id='cart'>
            <h3 className="head">Cart</h3>
    
            <div className="cart-items">
    
    
               {
                   cart.quantity !=0 ? (
                    <div className="cart-item">
                    <div className="thumbnail"><img src={thumbnail} /></div>
                    <div className="info">
                 <p className="name">Autum Limited Edition... </p>
                 <p className='amount small'><span className="price">${cart.price} </span> 
                 <span role={'img'}>&times; </span>
                 <span>{cart.quantity} </span>
                 <b className="total"> ${cart.quantity * cart.price}</b>
     
                 </p>
                    </div>
                    <div className="delete cursor-pointer" onClick={()=>setCart({...cart,quantity:0})}>
                        <img src={iconDelete} alt="" />
                    </div>
                </div>

                   ) : (
               <p className="isEmpty small">Your Cart is Empty.</p>
                       
                   )
               }
            </div>
    
           {cart.quantity && (
                <button className="checkout-btn cursor-pointer" >Checkout</button>
           )}
        </div>
           )
       }
    </Fragment>
  )
}

export default Cart