import './header.scss';
import logo from '../../Assets/images/logo.svg';
import avatar from '../../Assets/images/image-avatar.png';
import { Dispatch, SetStateAction, useState } from 'react';
import Cart from '../../Components/Cart/Cart';
import { TypeCart } from '../../App';
// import { CartToggler } from '../../Components/Cart/Cart';

const Header = ({cart,setCart}:{cart:TypeCart,setCart:Dispatch<SetStateAction<TypeCart>>}) => {
  return (
    <div id="header">
<div className="header-main">


<div className="header_logo">
  <img src={logo} alt="Logo" className="logo" />
</div>

<nav className="header_nav">
<ul className="nav-links">
  <li className="nav-link"><a href="/">Collections</a></li>
  <li className="nav-link active"><a href="/">Men</a></li>
  <li className="nav-link"><a href="/">Women</a></li>
  <li className="nav-link"><a href="/">About</a></li>
  <li className="nav-link"><a href="/">Contact</a></li>
</ul>
</nav>


</div>



<div className="header_action">
  <Cart cart={cart} setCart={setCart} />
<div className="profile"><img src={avatar} alt="Avatar Image" width={40} /></div>
</div>

</div>


  )
}

export default Header