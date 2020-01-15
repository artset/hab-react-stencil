import React from 'react';
import './Converter.css';

class Converter extends React.Component {

    constructor(props) {
        super(props);

        // these are the "defaults" of the component states.
        this.state = {
            input: "0",
            inputType: "blue room muffin"
        }

        // this is necessary so this.state can be accessed properly in these functions
        this.onSwitchUnits = this.onSwitchUnits.bind(this);
        this.onTextInput = this.onTextInput.bind(this);

    }

    // handles text input event by saving it to state
    onTextInput(e) {
        if (e.target.value.length > 0) {
            this.setState({input: e.target.value});
        } else {
            this.setState({input: "0"});
        }
        
    }

    // handles button click event
    onSwitchUnits() {
        this.state.inputType === "blue room muffin" ? this.setState({inputType: "scili"}) : this.setState({inputType: "blue room muffin"});
    }

    getOutput() {
        if (isNaN(parseInt(this.state.input))) {
            return <div class="error">Oops, please enter a proper integer! </div>;
        }

        if (this.state.inputType === "blue room muffin") {
            return this.muffinToSciLi(this.state.input);
        } else {
            return this.sciliToMuffin(this.state.input);
        }
    }

    // our helper conversion functions!
    // 1 muffin = 2.55 in : Scili = 2160 in : 847 muffins = 1 scili :) 
    muffinToSciLi(muffins) {
        return parseFloat(muffins) / 847 + " scili(s)";
    }

    sciliToMuffin(scili) {
        return parseFloat(scili) * 847 + " blue room muffin(s)";
    }



    render() {
      return (
        <div className="converter">
            <div className="converter__content">
                <div className="input">
                    <input type="text" onChange={ e => {this.onTextInput(e) }} /> {this.state.inputType}(s)
                </div>
                
                <div className="output">
                    {this.getOutput()}
                </div>
            </div>

            <button type="button" onClick={this.onSwitchUnits} class="button">Switch</button>

        </div>
      )
    }
}

export default Converter;
