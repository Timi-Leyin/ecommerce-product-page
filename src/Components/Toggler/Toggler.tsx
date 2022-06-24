import React, { useState } from 'react'
import './Toggler.css'
const Toggler = ({active}:{active?:boolean}) => {
    const [toggle,changeToggle] = useState( active || false )
  return (
    <div className={`toggler ${toggle && 'active'}`}>
        <div className="toggle"></div>  
        <input type="checkbox" name="" id=""  onChange={(e)=>{
          changeToggle(Boolean(e.target.checked));
          console.log(e.target.checked)
        }} />
    </div>
  )
}

export default Toggler