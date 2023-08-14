import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header';
import Counter from './components/Counter/Counter';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
 return(
  <BrowserRouter>
      <div className="wrapper">
        <Routes>
          <Route path='*' element={<Header />} />
        </Routes>
        <main>
        <Routes>
            <Route path='/counter' element={<Counter />}/>
        </Routes>
      </main>
      </div>
  </BrowserRouter>
 );
}

export default App
