import React from 'react'
import './Header.css'
import { FiMenu } from 'react-icons/fi';
import { CgClose } from 'react-icons/cg';
import {useState} from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  const [activeState, setActiveState] = useState('false')
  const StateMenu = () => {
    setActiveState(active => !active)
  }
  return (
    <header className='header'> 
        <div className="header__container">
          <div className="header__logo">
            <span>Lorem</span>
          </div>
          <div className= "header__list">
            <ul className= {`${activeState ? '' : 'active'}`}>
              <li><Link to="/counter">Counter</Link> </li>
              <li><Link to="/">Todo List</Link> </li>
                                      
            </ul>
          </div>
          <div className= "header__menu" onClick={StateMenu} >
            {activeState ? <FiMenu style={{ fontSize: 25 }}  /> : <CgClose style={{ fontSize: 25 }} />}
            
          </div>
        </div>
    </header>
  )
}

export default Header