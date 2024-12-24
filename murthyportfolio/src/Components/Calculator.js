import React, { useState } from 'react'
import '../CSS/Calculator.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const Calculator = () => {


const [input,setInput] = useState('')

const handleInput = (value) => {
  setInput((prevState) => prevState + value)
}

const handleEvaluate = () => {

setInput(eval(input))

}

const handlerest = () => {
  setInput('')
}


return(
  <>
  <input type="text" placeholder="Enter Values to Calculate" value={input} className='inputBox' />
  <div className='buttons_container'>
  <button className='button' onClick={() => handleInput(1)}>1</button>
  <button className='button' onClick={() => handleInput(2)}>2</button>
  <button className='button' onClick={() => handleInput(3)}>3</button>
  <button className='button' onClick={() => handleInput(4)}>4</button>
  <button className='button' onClick={() => handleInput(5)}>5</button>
  <button className='button' onClick={() => handleInput(6)}>6</button>
  <button className='button' onClick={() => handleInput(7)}>7</button>
  <button className='button' onClick={() => handleInput(8)}>8</button>
  <button className='button' onClick={() => handleInput(9)}>9</button>
  <button className='button' onClick={() => handleInput(0)}>0</button>
  <button className='button' onClick={() => handleInput('+')}>+</button>
  <button className='button' onClick={() => handleInput('-')}>-</button>
  <button className='button' onClick={() => handleInput('*')}>*</button>
  <button className='button' onClick={() => handleInput('/')}>/</button>
  <button className='button' onClick={handleEvaluate}>=</button>
  <button className='button' onClick={handlerest}>C</button>

  </div>
  
  </>
)


}

export default Calculator
