import React from 'react'
import './Header.css'
import { FiMenu } from 'react-icons/fi';
import { CgClose } from 'react-icons/cg';
import {useState} from 'react'

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
              <li>About </li>
              <li>How it works </li>
              <li>chat</li>
              <li>about</li>                          
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