import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Input.css";

export const Input = ({
  type = "text",
  label,
  required = false,
  name,
  value,
  placeholder,
  changeEvent 
}: {
  type?: string;
  label?: string;
  name?:string;
  required?: boolean;
  value?:string;
  placeholder?: string;
  changeEvent?:(e:any)=> void
}) => {
  let [show, changeMode] = useState(false);
  return (
    <div className="input">
      <label htmlFor="text">
        {label || type} {required && <sup className="required">*</sup>}{" "}
      </label>
      <div className="input_inner">
        <input
          type={type == "password" ? (show ? "text" : "password") : type}
          placeholder={placeholder}
          name={name || ''}
          onInput={(e)=> changeEvent && changeEvent(e)}
        />

        {type == "password" && (
          <span className="icon" onClick={() => changeMode(!show)}>
            {" "}
            {show ? <FaEyeSlash /> : <FaEye />}{" "}
          </span>
        )}
      </div>
    </div>
  );
};
