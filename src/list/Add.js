import React, { useState } from "react";

function Add({ onCreate }) {
  const [value, setValue] = useState("");

  function SubmitHandler(event) {
    event.preventDefault();
    if (value.trim()) {
      onCreate(value);
      setValue('')
    }
  }
  return (
    <form onSubmit={SubmitHandler}>
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <button type="submit">Add item</button>
    </form>
  );
}

export default Add;
