import React from 'react';
import Display from './Display'

function Keypad(props) {
  return (
    <div id='keypad-grid'>
        <Display displayValue={props.displayValue} />
        <button id="clear" className='keypad' value='clear' onClick={e => props.handleEntry(e.target.value)}>CLEAR</button>
        <button id="divide" className='keypad' value='/' onClick={e => props.handleEntry(e.target.value)}>/</button>
        <button id="multiply" className='keypad' value='*' onClick={e => props.handleEntry(e.target.value)}>X</button>
        <button id="seven" className='keypad' value='7' onClick={e => props.handleEntry(e.target.value)}>7</button>
        <button id="eight" className='keypad' value='8' onClick={e => props.handleEntry(e.target.value)}>8</button>
        <button id="nine" className='keypad' value='9' onClick={e => props.handleEntry(e.target.value)}>9</button>
        <button id="subtract" className='keypad' value='-' onClick={e => props.handleEntry(e.target.value)}>–</button>
        <button id="four" className='keypad' value='4' onClick={e => props.handleEntry(e.target.value)}>4</button>
        <button id="five" className='keypad' value='5' onClick={e => props.handleEntry(e.target.value)}>5</button>
        <button id="six" className='keypad' value='6' onClick={e => props.handleEntry(e.target.value)}>6</button>
        <button id="add" className='keypad' value='+' onClick={e => props.handleEntry(e.target.value)}>+</button>
        <button id="one" className='keypad' value='1' onClick={e => props.handleEntry(e.target.value)}>1</button>
        <button id="two" className='keypad' value='2' onClick={e => props.handleEntry(e.target.value)}>2</button>
        <button id="three" className='keypad' value='3' onClick={e => props.handleEntry(e.target.value)}>3</button>
        <button id="equals" className='keypad' value='=' onClick={e => props.handleEntry(e.target.value)}>=</button>
        <button id="zero" className='keypad' value='0' onClick={e => props.handleEntry(e.target.value)}>0</button>
        <button id="decimal" className='keypad' value='.' onClick={e => props.handleEntry(e.target.value)}>.</button>
    </div>
  );
}

export default Keypad;
