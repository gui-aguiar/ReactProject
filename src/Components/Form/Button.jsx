import React from "react";
import styles from "./Button.module.css";

// pq eu coloco esse negocio em volta se eu ja estou voltando um elemento botao, ou um elemento input etc?
const Button = ({ id, label, disabled, setValue, ...props }) => {
    return (
      <button  className={`${styles.button} ${disabled ? styles.disabled : styles.enabled}`}
        id={id}          
        onChange={({ target }) => setValue(target.value)}
        disabled={disabled}
        {...props}
      >
      {label}
      </button>      
    );
  };

  export default Button;
