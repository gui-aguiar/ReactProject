import React from "react";

const Input = ({ id, label, placeholder, setValue, ...props }) => {
    return (
      <>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          name={id}
          placeholder={placeholder}
          onChange={({ target }) => setValue(target.value)}
          {...props}
        />
      </>
    );
  };

  export default Input;
  //  o estado fica fora dele, pq? pq eu quero usar os dados 
  // e as coisas aqui fora dele
  // isso é só pra estilizar ele la
  