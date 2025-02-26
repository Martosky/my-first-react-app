import { useState } from "react";


 export default function Contact(props){


    return(
        
        <form className="">
          <label className="data-label" for={props.id}>{props.label}
          <input 
          className="info-data"
          type={props.type}
          placeholder={props.placeholder}
          name={props.name}
          id={props.id}
          />
          </label>
        </form>
        
    )
 }