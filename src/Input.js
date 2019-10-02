import React, { useState } from "react";

const Input = () => {
  const [text, setText] = useState("");

  return (
    <form>
      <input type="text" value={text} onChnage={setText}></input>
    </form>
  );
};

export default Input;
