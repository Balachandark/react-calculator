import React from 'react';

const KeypadComponent = ( props ) => {
    return (
        <div className="button">
            <button name="(" onClick={props.onClick}>(</button>
            <button name="CE" onClick={props.onClick}>CE</button>
            <button name=")" onClick={props.onClick}>)</button>
            <button name="C" onClick={props.onClick}>C</button><br/>

            <button name="1" onClick={props.onClick}>1</button>
            <button name="2" onClick={props.onClick}>2</button>
            <button name="3" onClick={props.onClick}>3</button>
            <button name="+" onClick={props.onClick}>+</button><br/>

            <button name="4" onClick={props.onClick}>4</button>
            <button name="5" onClick={props.onClick}>5</button>
            <button name="6" onClick={props.onClick}>6</button>
            <button name="-" onClick={props.onClick}>-</button><br/>

            <button name="7" onClick={props.onClick}>7</button>
            <button name="8" onClick={props.onClick}>8</button>
            <button name="9" onClick={props.onClick}>9</button>
            <button name="*" onClick={props.onClick}>x</button><br/>

            <button name="." onClick={props.onClick}>.</button>
            <button name="0" onClick={props.onClick}>0</button>
            <button name="=" onClick={props.onClick}>=</button>
            <button name="/" onClick={props.onClick}>÷</button><br/>
        </div>
    );
}

export default KeypadComponent;