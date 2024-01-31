
import './App.css';
import Todo from './component /Todo';
import TodoList from './component /TodoList';
import React, { useState } from 'react'

export default function App() {
  const [todo , setTodo ] = useState([])
  const getitem = (item) => {
     setTodo( (prevState)=> {
      return [...prevState , item]
     })
    }
    const handlereset= () => {
    
    setTodo("")
  }
 
  return (
    <div className='todos'>
  
      <Todo  item={getitem}/>
      {todo && todo.map(todo => (
        <TodoList  item={todo} />

      )) }
      <button  id='resetbtn' onClick={handlereset} >Reset</button>
      
      </div>
  )
}

