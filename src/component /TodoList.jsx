import React from "react";



export default function TodoList(props ) {
  const handeldelete = (item) => {
    const newItem = [...item]
    newItem.splice(item , 1)
    newItem(newItem)
  

  }
 
 
  return (
  
    <div className="todolist">
      <input type="checkbox" onChange={() => props.completed()} />
      <p>{props.item}</p>
    <div className="deletebtn">
    <span onClick={()=>handeldelete(props.item)}> '🧹' </span>
    
    </div>
      
    
    </div>

   
  );
}
