import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header';
import Counter from './components/Counter/Counter';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoForms from './components/TodoList/TodoForms';
import TodoItems from './components/TodoList/TodoItems';





function App() {

  const [todos, setTodos] = useState([])
  
 return(
  <BrowserRouter>
      <div className="wrapper">
        <Routes>
          <Route path='*' element={<Header />} />
        </Routes>
        <main>
        <Routes>
            <Route path='/counter' element={<Counter />}/>
            
            <Route path='/todo'
               element={<><TodoForms todos={todos} setTodos={setTodos}/> <TodoItems todos={todos} setTodos={setTodos}/>
              
               </>} />
              
        </Routes>
      </main>
      </div>
  </BrowserRouter>
 );
}

export default App
