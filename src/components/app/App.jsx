import './App.css'
import React, { useState } from 'react';
import Button from '../button/Button';

const App=() =>{
    const [value, setValue] = useState("0");
    const [memories,setMemories] = useState('0');
    const [operator, setOperator] = useState(null);

    const handleButtonPress= content=>()=>{
        switch(content){
            case 'AC':
                setMemories("0");
                break;
            case '%':
                setMemories(memories*0.01)
                break;
            case '±':
                setMemories(memories*-1)
                break;
            case '+':
                setOperator('+');
                setMemories(parseFloat(memories)+parseFloat(value))
                break;
            case '-':
                setOperator('-')
                break;
            case '×':
                setOperator('×')
                break;
            case '÷':
                setOperator('÷')
                break;
            default:
                setMemories(parseFloat(memories)+ content.toString());
                break;
        }
    }
    return (


        
        <div className='app'>
            <div className="top">11:00</div>
            <div className="display">{memories}</div>
            <div className="numberPad">
            <Button
          onButtonClick={handleButtonPress}
          content="AC"
          type="function"
        />
        <Button onButtonClick={handleButtonPress} content="±" type="function" />
        <Button onButtonClick={handleButtonPress} content="%" type="function" />
        <Button onButtonClick={handleButtonPress} content="÷" type="operator" />
        <Button onButtonClick={handleButtonPress} content="7" />
        <Button onButtonClick={handleButtonPress} content="8" />
        <Button onButtonClick={handleButtonPress} content="9" />
        <Button onButtonClick={handleButtonPress} content="×" type="operator" />
        <Button onButtonClick={handleButtonPress} content="4" />
        <Button onButtonClick={handleButtonPress} content="5" />
        <Button onButtonClick={handleButtonPress} content="6" />
        <Button onButtonClick={handleButtonPress} content="-" type="operator" />
        <Button onButtonClick={handleButtonPress} content="1" />
        <Button onButtonClick={handleButtonPress} content="2" />
        <Button onButtonClick={handleButtonPress} content="3" />
        <Button onButtonClick={handleButtonPress} content="+" type="operator" />
        <Button onButtonClick={handleButtonPress} content="0" />
        <Button onButtonClick={handleButtonPress} content="." />
        <Button onButtonClick={handleButtonPress} content="=" type="operator" />
      
            </div>
            <div className="bottom"></div>
        </div>
    );
}

export default App;