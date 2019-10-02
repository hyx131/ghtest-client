import React, { useState } from "react";

const Input = () => {
  const [text, setText] = useState("");

  const handleChange = e => {
    setText(e.target.value);
  };

  const handleClick = e => {
    e.preventDefault();
    console.log(text);
    setText("");
  };

  return (
    <form>
      <input type="text" value={text} onChange={handleChange} />
      <br />
      <button type="submit" onClick={handleClick}>
        Display Input
      </button>
    </form>
  );
};

export default Input;
