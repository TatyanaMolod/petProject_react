import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header';
import Counter from './components/Counter/Counter';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoForms from './components/TodoList/TodoForms';
import TodoItems from './components/TodoList/TodoItems';
import { useEffect } from 'react';





function App() {

  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || [])


  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
 return(
  <BrowserRouter>
      <div className="wrapper">
        <Routes>
          <Route path='*' element={<Header />} />
        </Routes>
        <main>
        <Routes>
            <Route path='/counter' element={<Counter />}/>
            
            <Route path='/'
               element={<><TodoForms todos={todos} setTodos={setTodos} /> <TodoItems todos={todos} setTodos={setTodos}/>
              
               </>} />
              
        </Routes>
      </main>
      </div>
  </BrowserRouter>
 );
}

export default App
