import React from 'react';
import './App.css';
import Converter from './Converter';
import Header from './Header';

class App extends React.Component {
    render() {
      return (
          <div className="content">
              <Header title="Unit Converter" />
              <Converter />
          </div>
      )
    }
  }

export default App;
