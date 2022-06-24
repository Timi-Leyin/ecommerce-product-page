
import './product.scss';

export const ProductDisplay = () => {
  return (
    <div className="product_display">display</div>
  )
}


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

        <div className="product-actions">

        </div>
    </div>
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