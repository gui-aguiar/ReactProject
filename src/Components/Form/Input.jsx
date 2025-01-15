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
  

  // nao passei o tipo dele 
// teria que passar que é do tipo text 


// tenho que olhar meu codigo , pq o children na verdade é 
// a aquilo que ta dentro das tags, e ai eu usei isso como nome
// da porra de um componente la 