import './header.scss';
import logo from '../../Assets/images/logo.svg';
import cartIcon from '../../Assets/images/icon-cart.svg';
import avatar from '../../Assets/images/image-avatar.png';

const Header = () => {
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
<div className="cart"><img src={cartIcon} alt="cart icon" /></div>
<div className="profile"><img src={avatar} alt="Avatar Image" width={40} /></div>
</div>

</div>


  )
}

export default Header