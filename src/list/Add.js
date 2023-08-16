import React, { useState } from "react";

function Add({ onCreate }) {
  const [pupok, setPupok] = useState("");

function ClearHandler(){
    setPupok('')
}

  function SubmitHandler(event) {

    event.preventDefault();
    if (pupok.trim()) {
          onCreate(pupok);

      
    }
  }
function updatePupok(event){
    setPupok(event.target.value)
}
  return (
    <form onSubmit={SubmitHandler}>
      <input value={pupok} onChange={updatePupok} />
    
      <button type="button" onClick={SubmitHandler}>Add item</button>
      <button type="button" onClick={ClearHandler}>Clear input</button>

    </form>
  );
}

export default Add;
