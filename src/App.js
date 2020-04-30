import React, { Component } from 'react';
import './App.css';
import Keypad from './Components/Keypad'


const isNumber = (input) => {
  const regexNumber = /[0-9]/;
  return regexNumber.test(input);
}

const isOperator = (input) => {
  const regexOperator = /[+/*-]/;
  return regexOperator.test(input);
}

const endsWithOperator = (input) => {
  const regexEndsWithOperator = /[+/*-]$/;
  return regexEndsWithOperator.test(input);
}

class App extends Component {
  constructor(){
    super();
    this.state={
      lastInput: '',
      display: '0',
      formula: ''
    }

    this.handleEntry = this.handleEntry.bind(this);
    this.handleNumber = this.handleNumber.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
    this.handleEquals = this.handleEquals.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleNumber(number) {
    if (this.state.display === '0'){
      this.setState({
        lastInput: number,
        display: number,
        formula: number
      })
    } else if (endsWithOperator(this.state.display) && this.state.display !== '-'){
      this.setState({
        lastInput: number,
        display: this.state.display + number,
        formula: this.state.formula + number
    })} else {
      this.setState({
        lastInput: number,
        display: this.state.display + number,
        formula: this.state.formula + number
    })}
  }

  handleOperator (operator) {
    if (operator === '-'){
      this.setState({
        lastInput: operator,
        display: operator,
        formula: this.state.formula + operator
      })
    } else if (isOperator(this.state.lastInput)) {
      let formula = this.state.formula;

      while(endsWithOperator(formula)){
        formula = formula.slice(0,formula.length-1);
      }
    
      this.setState({
        lastInput: operator,
        display: operator,
        formula: formula + operator
      })
    } else {
      this.setState({
        lastInput: operator,
        display: operator,
        formula: this.state.formula + operator
      })
    }
  }

  handleDecimal(){
    if (!this.state.display.includes('.')){
      this.setState({
        lastInput: '.',
        display: this.state.display + '.',
        formula: this.state.formula + '.'
      })
    }
  }

  handleEquals(){
    this.setState({
      lastInput: '=',
      display: eval(this.state.formula),
      formula: eval(this.state.formula)
    })
  }

  handleClear(){
    this.setState({
      lastInput: '',
      display: '0',
      formula: ''
    })
  }

  handleEntry(input) {
    if(isNumber(input)) { 
      this.handleNumber(input);
    } else if (isOperator(input)) {
      this.handleOperator(input);
    } else if (input === '.') {
      this.handleDecimal();
    } else if (input === '=') {
      this.handleEquals();
    } else if (input === 'clear') {
      this.handleClear();

    } else {
      console.log('error')
    }
  }
  

  render(){
    return (
      <div className="App">
        <Keypad handleEntry={this.handleEntry} displayValue={this.state.display} />
      </div>
    );
  }

}

export default App;
