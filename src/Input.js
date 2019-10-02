import React from "react";

const Input = props => {
  return (
    <form>
      <input type="text" value={props.value} onChange={props.handleChange} onClick={props.setClick} />
      <br />
      <br />
      <label>{props.click}</label>
      <br />
      <button style={{ padding: "7px", borderRadius: "2px" }} type="submit" onClick={props.handleClick}>
        Display Input
      </button>
    </form>
  );
};

export default Input;
