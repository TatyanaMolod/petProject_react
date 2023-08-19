import React from 'react'
import { BsCheckLg } from 'react-icons/bs';
import './TodoItems.jsx'
import './TodoList.css'



const Check = ({todos, setTodos}) => {
   
    const toggleTodo =(id) => {
        const copy = [...todos]
        const c = copy.find(t => t.id === id)
        c.isCompleted = !c.isCompleted
        setTodos(copy)
            
        
    }
    
    
  return (
<div>
    {todos.map(todo => (
    <div key={todo.id}  className='check_box' onClick={() => toggleTodo(todo.id)}>
        {todo.isCompleted &&(
            <BsCheckLg  className='check_icon'/>
        )
        }
    </div>
    )
    )}
  
  </div>
  )
}

export default Check