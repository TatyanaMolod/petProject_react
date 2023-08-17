import React from 'react'
import { useState } from 'react'
import './TodoList.css'
import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'
import TodoItems from './TodoItems';


const TodoForms = ({todos, setTodos}) => {
    const [text, setText] = useState('')

    const addTodo = () => {
      if(text!= ''){
        setTodos([...todos, {
          id: nanoid(),
          text:text
        }]);
      }
      setText('')
    }

  return (
    <div>
    <div className='form'>
        <input className='form_input' value={text} onChange={ (e) => setText(e.target.value)}/>
        <button className='form_button' onClick={addTodo}>Add</button>
    </div>
     <TodoItems todos={todos} setTodos={setTodos}/>
    </div>
  )

}
export default TodoForms