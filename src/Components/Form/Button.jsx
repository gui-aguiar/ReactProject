import React from "react";

const Button = ({ id, setValue, ...props }) => {
    return (
      <>
        <button
          id={id}
          onChange={({ target }) => setValue(target.value)}
          {...props}
        />
      </>
    );
  };

  export default Button;
