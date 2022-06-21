import React from 'react';
import './Calc.css';

export class Calc extends React.Component {
    state = {
        input: 0,
    };

    handleClick = (e) => {
        const button = e.target.innerHTML;
        const display = document.getElementById('display').value;
        
        if ((button !== 'C') && (button !== '=')) {
            if (this.state.input === 0) {
                this.setState({input: button});
            }
            else {
                this.setState({input: display + button});
            }
        }
        else if (button === 'C'){
            this.setState({input: 0});
        }
        else if (button === '=') {
            this.setState({input: eval(this.state.input)})
        }

    }

    render() {
        return (
            <div className="main">
                <div className="calcContainer">
                    <input id="display" type="text" maxLength="9" value={ this.state.input }/>
                    <div className="btnContainer">
                        <button id="btn7" className="buttonClass" onClick={this.handleClick}>7</button>
                        <button id="btn8" className="buttonClass" onClick={this.handleClick}>8</button>
                        <button id="btn9" className="buttonClass" onClick={this.handleClick}>9</button>
                        <button id="btn+" className="buttonClass" onClick={this.handleClick}>+</button>

                        <button id="btn4" className="buttonClass" onClick={this.handleClick}>4</button>
                        <button id="btn5" className="buttonClass" onClick={this.handleClick}>5</button>
                        <button id="btn6" className="buttonClass" onClick={this.handleClick}>6</button>
                        <button id="btn-" className="buttonClass" onClick={this.handleClick}>-</button>
 
                        <button id="btn1" className="buttonClass" onClick={this.handleClick}>1</button>
                        <button id="btn2" className="buttonClass" onClick={this.handleClick}>2</button>
                        <button id="btn3" className="buttonClass" onClick={this.handleClick}>3</button>
                        <button id="btnX" className="buttonClass" onClick={this.handleClick}>*</button>

                        <button id="btnC" className="buttonClass" onClick={this.handleClick}>C</button>
                        <button id="btn0" className="buttonClass" onClick={this.handleClick}>0</button>
                        <button id="btn=" className="buttonClass" onClick={this.handleClick}>=</button>
                        <button id="btn/" className="buttonClass" onClick={this.handleClick}>/</button>

                    </div>
                </div>
            </div>
        );
    }
}