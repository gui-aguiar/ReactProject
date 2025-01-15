import styles from "./Button.module.css";

// pq eu coloco esse negocio em volta se eu ja estou voltando um elemento botao, ou um elemento input etc?
const Button = ({ children, disabled, disabledStyle, handleClick, ...props }) => {  // aqui na verdade vem o props que é o que e ucoloquei ali, ma seu desestruturo e ta ok 
    return (
      <button  className={`${styles.button} ${disabledStyle ? styles.disabled : styles.enabled}`}               
        onClick={handleClick}
        disabled={disabled}
        {...props}
      >
      {children}
      </button>      
    );
  };

  export default Button;
