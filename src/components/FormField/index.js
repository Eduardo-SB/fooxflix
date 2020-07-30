import React from 'react';

export default function FormField({ label, type, name, value, onChange }){
  
  function typeInput(){
    if(type === "textarea"){
      return (
        <textarea
              type="text"
              value={value}
              name={name}
              onChange={onChange}
        />)
    }else{
      return (
        <input
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />)
    }
  }

  return (
    <>
      <label>
        {label}: 
        
        {typeInput(type)}
        
      </label>
    </>
  );
}