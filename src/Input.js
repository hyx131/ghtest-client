import React from "react";

const Input = props => {
  return (
    <form>
      <input type="text" value={props.value} onChange={props.handleChange} />
      <br />
      <button type="submit" onClick={props.handleClick}>
        Display Input
      </button>
    </form>
  );
};

export default Input;
