import { Fragment, useEffect, useState } from 'react';

import './product.scss';
import iconPlus from '../../Assets/images/icon-plus.svg';
import iconMinus from '../../Assets/images/icon-minus.svg';
import iconCart from '../../Assets/images/icon-cart.svg';
import iconNext from '../../Assets/images/icon-next.svg';
import iconPrevious from '../../Assets/images/icon-previous.svg';
import iconClose from '../../Assets/images/icon-close.svg';

// slide images
import productImage1 from '../../Assets/images/image-product-1.jpg'
import productImage2 from '../../Assets/images/image-product-2.jpg'
import productImage3 from '../../Assets/images/image-product-3.jpg'
import productImage4 from '../../Assets/images/image-product-4.jpg'





type ImageSlide = ()=> void

const ProductQuantity=({quantity,setQuantity,onAddToCart}:{quantity:any,setQuantity:any,onAddToCart:any})=>{

    return(
        <div className="product-actions">

        <div className="quantity">
        <span className="minus-quantity  cursor-pointer" onClick={()=> setQuantity('minus') }><img src={iconMinus} alt="minus product quantity" /></span>
        <span className="quantity-no">{quantity}</span>
        <span className="plus-quantity cursor-pointer" onClick={()=> setQuantity('plus')}><img src={iconPlus} alt="plus product quantity" /></span>
    </div>

     <button className='add-cart-btn' onClick={onAddToCart} disabled={quantity < 1 && true }>
         <span><img src={iconCart} alt="" /></span>
<span>Add to cart</span>
     </button>

    </div>
    )
}

// PRODUCT INFO
export const ProductInfo = ({quantity,setQuantity,onAddToCart}:{quantity:any,setQuantity:any,onAddToCart:any}) => {
  return (
    <div className="product_information">
  <div>
  <h6 className="product-owner">Sneaker Company</h6>
        <h1 className='product-name'>Fall Limited Edition Sneakers.</h1>
        <p className="product-description small">
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum ut enim mollitia, similique dolores culpa eos doloribus! Fugit quas, consequuntur non mollitia esse perspiciatis sunt, illum iure, distinctio ex enim.
        </p>
  </div>

        <div className="product-price">
            <div>
                <h3 className="new-price">$125.00</h3>
                <div className="discount small">50%</div>
            </div>
            <h4 className='old-price'>$250.00</h4>
        </div>

       
   <ProductQuantity quantity={quantity} setQuantity={setQuantity} onAddToCart={onAddToCart}/>
        
    </div>
  )
}



// PRODUCT DISPLAY
export const ProductDisplay = ({children}:{children?:React.ReactNode}) => {
    // slide images ====> array
    const images = [productImage1,productImage2,productImage3,productImage4];
    // current image display index
    const [index,changeIndex] = useState(0)
    const [status,LightBox] =useState(false)

    const max = images.length -1
    const min = 0

    const nextImage:ImageSlide = ()=> {
        if(index >= images.length-1){
            changeIndex(images.length-1)
            return
        }

        changeIndex(index+1)

    }

    const prevImage:ImageSlide = ()=>{
        if(index < 1){
            changeIndex(0) 
            return
        }
        changeIndex(index-1)
    
    }



    return (
        <Fragment>

          

      <div className="product_display">

        { (status && children) && (
            <div className="lightbox">
                <div className="overlay" onClick={()=> LightBox(false)}>
                    <div className="close cursor-pointer"><img width={30} src={iconClose} alt="" /></div>
                </div>
                {children}
            </div>
        )}
    

          <div className="gallery">

              <div className="current-display">
                 <div onClick={()=> LightBox(true)} className='img'>
                 <img src={images[index]} alt="" className="img" />
                 </div>
              <div className="control control-prev" style={{
                  opacity:index==min ? 0.4 : 1
              }} onClick={prevImage}><img src={iconPrevious} alt="previous" /></div>
              <div className="control control-next"  style={{
                  opacity:index==max ? 0.4 : 1
              }}  onClick={nextImage}><img src={iconNext} alt="next" /></div>
              </div>

              <div className="thumbnails">
                 
                  {
                      images.map((img,i)=>{
                          return(
                            <div className={`thumb ${i == index && 'active'}`} key={i}  onClick={()=> changeIndex(i)}>
                            <img src={images[i]} alt="" />
                        </div>
                          )
                      })
                  }
               
              </div>
          </div>
      </div>
      </Fragment>
    )
  }
  


const Product = ({quantity,setQuantity,onAddToCart}:{quantity:any,setQuantity:any,onAddToCart:any}) => {
  return (
   <section id="product">
     <ProductDisplay>
     <ProductDisplay />
     </ProductDisplay>
     <ProductInfo quantity={quantity} setQuantity={setQuantity} onAddToCart={onAddToCart} />
   </section>
  )
}

export default Product