import React, { ReactNode } from 'react'
import { Button } from '../Auth/Auth';
import { Input } from '../Input/Input';
import './PopUp.css';

const PopUp = ({heading,subHeading,style,children}:{heading:string | ReactNode,subHeading?:string | ReactNode,style?:any,children?:any }) => {
  return (
   <section id="popup" style={style}>
       <div className="content">
           <div>
           <h2 className='_heading' style={{margin:'0'}}> {heading}</h2>
           <small className="sub_heading">{subHeading}</small>
      </div>
 {
children
 }
 </div>
   </section>
  )
}

export default PopUp