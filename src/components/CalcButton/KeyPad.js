import React, { useState } from "react";
import CalcButton from './CalcButton'


const KeyPad = () => {
    
    const [text, setText] = useState("");
    const [mem, setMem] = useState(0);
    const [answer, setAnswer] = useState(0);
    const [op, setOp] = useState('+');
  
    const handleTextButtonClick = (value) => {
            setText((prev) => prev + value);
    };
  
    const handleOPButtonClick = (value) => {
        if (value === "BACKSPACE") {
            // Remove the last character from the text
            setText((prev) => {
                return prev.slice(0, -1);
            }
            );
          } 
          else if (value === "=") {
            // Remove the last character from the text
            switch(op){
                case '+':
                    setText(mem+Number(text));
                    break;
                case '*':
                    setText(mem*Number(text));
                    break;
                case '/':
                    setText(mem/Number(text));
                    break;
                case '-':
                    setText(mem-Number(text));
                    break;
            }
          }   
        else  {
            // Remove the last character from the text
            setMem(Number(text))
            setOp(value);
            setText("");
          }   
    };

    return (
      <div>
        <div>
          <CalcButton label="7" onClick={handleTextButtonClick} />
          <CalcButton label="8" onClick={handleTextButtonClick} />
          <CalcButton label="9" onClick={handleTextButtonClick} />
          <CalcButton label="+" onClick={handleOPButtonClick} />
        </div>
        <div>
          <CalcButton label="4" onClick={handleTextButtonClick} />
          <CalcButton label="5" onClick={handleTextButtonClick} />
          <CalcButton label="6" onClick={handleTextButtonClick} />
          <CalcButton label="-" onClick={handleOPButtonClick} />
        </div>
        <div>
          <CalcButton label="1" onClick={handleTextButtonClick} />
          <CalcButton label="2" onClick={handleTextButtonClick} />
          <CalcButton label="3" onClick={handleTextButtonClick} />
          <CalcButton label="*" onClick={handleOPButtonClick} />
        </div>
        <div>
            <CalcButton label="BACKSPACE" onClick={handleOPButtonClick} />
            <CalcButton label="=" onClick={handleOPButtonClick} />
            <CalcButton label="/" onClick={handleOPButtonClick} />
            <CalcButton label="C" onClick={handleOPButtonClick} />
        </div>
        <input type="text" value={text} readOnly />
      </div>
    );
  };
  
  export default KeyPad;