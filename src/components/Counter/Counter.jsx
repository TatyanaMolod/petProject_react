import React from 'react'
import './Counter.css'
import {useState} from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import {AiOutlineMinus} from 'react-icons/ai';


const Counter = () => {
    const[count, setCount] = useState(0)
    const onClickPlus = () => {
        setCount(count+1)
    }

    const onClickMinus = () => {
        setCount(count-1)
    }


  return (
    <div className='counter'>
        <div className="counter__container">
            <h1>Счетчик</h1>
            <div className='counter__item'>{count}</div>
            <div className="counter__operation">
                <button className='counter__minus' onClick={onClickMinus}><AiOutlineMinus/></button>
                <button className='counter__plus' onClick={onClickPlus}><AiOutlinePlus/></button>
            </div>
        </div>
    </div>
  )
}

export default Counter