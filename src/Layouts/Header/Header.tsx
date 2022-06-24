import './header.scss';
import logo from '../../Assets/images/logo.svg';
import menu from '../../Assets/images/icon-menu.svg';
import iconClose from '../../Assets/images/icon-close.svg';
import avatar from '../../Assets/images/image-avatar.png';
import { Dispatch, SetStateAction, useState } from 'react';
import Cart from '../../Components/Cart/Cart';
import { TypeCart } from '../../App';
// import { CartToggler } from '../../Components/Cart/Cart';

const Header = ({cart,setCart}:{cart:TypeCart,setCart:Dispatch<SetStateAction<TypeCart>>}) => {
  const [open,setMenu] = useState(false)
  return (
    <div id="header">
<div className="header-main">


<div className="header_logo">
  <span className='menu' onClick={()=> setMenu(true)}><img src={menu} alt="" className='cursor-pointer'/></span>
  <img src={logo} alt="Logo" className="logo" />
</div>

<nav className={`header_nav ${open && 'open'}`}>
  <div className="close cursor-pointer" onClick={()=> setMenu(false)}>
    <img src={iconClose} alt="" />
  </div>
<ul className="nav-links">
  <li className="nav-link"><a href="#">Collections</a></li>
  <li className="nav-link"><a href="#">Men</a></li>
  <li className="nav-link"><a href="#">Women</a></li>
  <li className="nav-link"><a href="#">About</a></li>
  <li className="nav-link"><a href="#">Contact</a></li>
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