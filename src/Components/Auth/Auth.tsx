import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaCheck, FaDiagnoses, FaGoogle, FaTimes } from 'react-icons/fa'
import logo from '../../Assets/logo.svg'
import './Auth.css'
import { IconType } from 'react-icons/lib'
import randNum from '../../Utils/randNum'
const AuthHeader = ({type,text}:{type:string,text:string}) => {
  return (
    <div className="auth-header">

    <Link to="/">
    <div className="logo">
        <img src={logo} width={70} alt="" />
     </div>
    </Link>

     <div className="auth-info">
         <h2>{type}</h2>
         <p>{text}</p>
     </div>
 </div>
  )
}



 const AuthBanner = () => {
  return (
   <aside className="auth_banner">
       banner
   </aside>
  )
}



const AuthBottom = () => {
  return (
    <div className="_spread">
    <div className="check">
        <input type="checkbox" name="remember" id="" />
        <small>Remember me</small>
    </div>

    <div>
       <Link to="/forgotten-password">
           <span className="link">Forgotten password?</span>
       </Link>
    </div>
</div>

  )
}

// type Action = ()=> void

// const Button = ({fallback,children}:{fallback:string ,children:any}) =>{
//   let [text,changeText] = useState<string | null>(null)
//   return(
//     <button type="submit" disabled={text ? true : false} className="submit-btn" onClick={()=> changeText(fallback) }>
//        { text || children }
//      </button>
//   )
// }


type Action = ()=> void

const Button = ({fallback=[],children,style}:{fallback?:string[] ,children:any,style?:object}) =>{
  let [text,changeText] = useState<string | null>(null)
  let status = [...fallback,'Please wait...','A Moment...','Almost done...']

  function showIndicator(){
    setInterval(()=>{
      let rand = randNum(status.length)
      changeText(status[rand])
    },2000)
  }
  return(
    <button type="submit" disabled={text ? true : false} style={style} className="submit-btn" onClick={()=> showIndicator() }>
       { text || children }
     </button>
  )
}


const AuthOptions = () => {
  return (    
    <div className="auth-options">
        <div>
            <button> <span className="icon"> <FaGoogle /> </span> <small>Sign in with Google</small> </button>
        </div>
   {/* <h6>Or</h6> */}
    </div>
  )
}


const AuthStatus =({type='',msg}:{type?:string,msg:string})=>{
  return(
    <div className={`auth-error ${type}`}>
      <span className="icon">{type=='error'? <FaTimes />: type == 'warn'? <FaDiagnoses /> : <FaCheck />  }</span>
      <span className="msg">{msg}</span>
    </div>
  )
}


export { AuthHeader,AuthOptions,AuthBottom,AuthBanner,AuthStatus,Button }