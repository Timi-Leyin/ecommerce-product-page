import { FaCode, FaCog, FaEnvelope, FaHome, FaList, FaPlus, FaSignOutAlt } from "react-icons/fa"
import {AiFillHome as Home} from 'react-icons/ai';
import logo from '../../Assets/logo.svg';
import { IconType } from "react-icons";
import { Fragment } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import './SideBar.css'

export const SideBarItem = ({icon,text, to,active=false}:{icon:any,text:string, to:string,active?:boolean | null}) => {
  return (
  <Fragment>
        <li className={"nav-link " + (active && "active")}>
        <Link to={to}>
    <span className="icon"><span>{icon}</span> <span>{text}</span> </span>
  </Link>
  </li>
  </Fragment>
  )
}


const SideBar = () => {
  const { pathname }= useLocation()
  const { type } = useParams()
  console.log('PATHNEM' , pathname.split('/'))
  console.log('Parama',type)
  return (
    <aside>
    <nav className="navigation open">
      
        <Link to='/dashboard'>
        <div className="nav-logo">
            <img src={logo} width="30" alt="logo" style={{filter:'invert(0.5)'}} />
        </div>
        </Link>

        <ul className="nav-links">
            <SideBarItem icon={<Home />} text='Home' to='/dashboard' active={ pathname == '/dashboard' && true  } />
            <SideBarItem icon={<FaCode />} text='Docs' to='/dashboard/docs' active={ pathname.split('/')[2] == 'docs' && true  } />
            <SideBarItem icon={<FaCog />} text='Settings' to='/dashboard/settings/account ' active={ pathname.split('/')[2] == 'settings' && true  } />
            <SideBarItem icon={<FaList />} text='Settings' to='/dashboard/waitlists' active={ pathname == '/dashboard/waitlists' && true  } />
            <SideBarItem icon={<FaEnvelope />} text='E-mails' to='/dashboard/email' active={ pathname == '/dashboard/email' && true  } />
        </ul>

        <div className="nav-logout">
        <SideBarItem icon={<FaSignOutAlt />} text='Logout' to='/logout' />
        </div>
    </nav>
</aside>

  )
}

export { SideBar }