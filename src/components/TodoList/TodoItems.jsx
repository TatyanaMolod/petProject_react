import React from 'react'
import { useState } from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';
import { FiEdit2 } from 'react-icons/fi';
import './TodoList.css'
import { BsCheckLg } from 'react-icons/bs';


const TodoItems = ({todos, setTodos}) => {

  const[edit, setEdit] = useState(null)
  const[value, setValue] = useState('')

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id != id));

  };

  const editTodo = (id, text) => {
    setEdit(id)
    setValue(text)
  }

  const saveTodo = (id) => {
    let newTodo = [...todos].map(todo => {
      if (todo.id == id) {
        todo.text = value
      }
      return todo
    })
    setTodos(newTodo)
    setEdit(null)
  }

  const toggleTodo =(id) => {
            const copy = [...todos]
            const c = copy.find(t => t.id === id)
            c.isCompleted = !c.isCompleted
            setTodos(copy)
            console.log(id)
  }
  
 
  return (
    <div className='items'>
      <div>
          <ul className='items_list'>
              {todos.map(todo => (
              <li key={todo.id}>
                {
                  edit == todo.id ? 
                  <div>
                    <input className='items_change' value={value} onChange={(e) => setValue(e.target.value)}/>
                    <button className='items_save' onClick={() =>saveTodo(todo.id)}>Save</button>
                  </div> :
                  <div> {
                    todo.isCompleted == true ?
                        <div>
                          <span style={{textDecoration: 'line-through', color: 'gray'}} >{todo.text}</span>
                          <button className='items_delete' onClick={() => deleteTodo(todo.id)}><AiTwotoneDelete/></button>
                          <div  className='check_box' onClick={() => toggleTodo(todo.id)}>
                              <BsCheckLg  className='check_icon' />
                          </div> 
                        </div> :
                        <div>
                          {todo.text}
                          <button className='items_edit' onClick={() => editTodo(todo.id, todo.text)}><FiEdit2/></button>
                          <button className='items_delete' onClick={() => deleteTodo(todo.id)}><AiTwotoneDelete/></button>
                          <div  className='check_box' onClick={() => toggleTodo(todo.id)}></div>
                        </div>
                        }
                    </div>
                }
              </li>
          ))}
          </ul>         
      </div>
    </div>
  )
}

export default TodoItems