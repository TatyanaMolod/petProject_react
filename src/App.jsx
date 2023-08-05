import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header';
import Counter from './components/Counter/Counter';

function App() {
 return(
  <div>
    <div className="wrapper">
    <Header />
    <Counter />
    </div>
  </div>
 );
}

export default App
