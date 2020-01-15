import React from 'react';
import './Converter.css';

class Converter extends React.Component {

    constructor(props) {
        super(props);

        // TODO: Add two states to the input and their defaults:
        // 1) The input
        // 2) The inputType
        this.state = {

        }

        // TODO: bind onTextInput and onSwitchUnits

    }


    // TODO: Set the input state to the text entered in the text box.
    // Hint: Access the text with 'e.target.value'
    onTextInput(e) {
        
    }


    // TODO: Convert muffins to scili
    // Input: A string that represents a number
    // Output: How you want to represent the converter
    // Hint:  847 muffins make a scili.
    muffinToSciLi(muffins) {
    }

    sciliToMuffin(scili) {
    }

    // TODO: Use the input state to call a conversion function, and return it
    // Bonus points: you can check if the input is a valid number. if not, you can return an error message.
    getOutput() {
    }

    
    // When the button 'Switch' is clicked, you want to switch the state of the input type.
    // ex. if the input type is 'blue room muffin', you want the input type to be 'scili'
    onSwitchUnits() {
        this.state.inputType === "blue room muffin" ? this.setState({inputType: "scili"}) : this.setState({inputType: "blue room muffin"});
    }


    render() {
      return (
        <div className="converter">
            <div className="converter__content">

                <div className="input">
                    {/* TODO: make a text box and onChange, call onTextInput*/}
                </div>
                
                <div className="output">
                     {/* TODO: call getOutput() */}
                    
                </div>
            </div>

            {/* TODO:Make a button of type button, with class button, and onClick, calls onSwitchUnits */}

        </div>
      )
    }
}

export default Converter;
