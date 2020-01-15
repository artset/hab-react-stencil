import React from 'react';
import './Converter.css';

class Converter extends React.Component {

    constructor(props) {
        super(props);

        // TODO: Add state to your converter, so it has a d
        this.state = {
            input: "0",
            inputType: "blue room muffin"
        }

        // TODO: bind the

    }

    ////////////////////////////////////////////////////////////////////////////
    // STEP 1: This section is to make the converter take a text input, and output

    // TODO: 
    onTextInput(e) {
        if (e.target.value.length > 0) {
            this.setState({input: e.target.value});
        } else {
            this.setState({input: "0"});
        }
        
    }


    // TODO: Convert muffins to scili
    // Input: A string that represents a number
    // Output: How you want to represent the converter
    // Hint:  847 muffins make a scili.
    muffinToSciLi(muffins) {
        return;
    }

    sciliToMuffin(scili) {
        return;
    }

    // TODO: Use the input state to call a conversion function
    getOutput() {
        return;
    }

    
    // handles button click event
    onSwitchUnits() {
        this.state.inputType === "blue room muffin" ? this.setState({inputType: "scili"}) : this.setState({inputType: "blue room muffin"});
    }



    render() {
      return (
        <div className="converter">
            <div className="converter__content">

                {/* This is the text input box that will take in your input. */}
                <div className="input">
                    <input type="text" onChange={ e => {this.onTextInput(e) }} /> {this.state.inputType}(s)
                </div>
                
                {/* This is the div that will render the output calculation. */}
                <div className="output">
                    {this.getOutput()}
                </div>
            </div>

            {/* This is the button to click in order to switch units. We'll do this last! */}
            <button type="button" onClick={this.onSwitchUnits} class="button">Switch</button>

        </div>
      )
    }
}

export default Converter;
