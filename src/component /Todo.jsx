import React, { useState } from "react";


export default function Todo(prpps ) {
  const [item, setItem] = useState();

  const handlechange = (e) => {
    setItem(e.target.value);
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    prpps.item(item)
    setItem("")
  };
 
  
  return (
    <form  action="post" onSubmit={handlesubmit}>

     <div className="container">
     

     <div className="inputs">
     
     <input
        onChange={handlechange}
        type="text"
        value={item}
        placeholder="Write your ToDo"
      />
      <button id="btn" type="submit ">ADD</button>
      
     </div>
     
     </div>
      
    </form>
  );
}

