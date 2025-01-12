import React from "react";
import styles from "./Input.module.css";

const Input = ({ id, label, placeholder, setValue, ...props }) => {
    return (
      <>
        <input className={styles.inputField}
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
  