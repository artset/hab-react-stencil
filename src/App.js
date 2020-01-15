import React from 'react';
import './App.css';
import Converter from './Converter';
import Header from './Header';

class App extends React.Component {
    render() {
      return (
          <div className="content">
              <Header title="How many stacked blue room muffins make a scili?" />
              <Converter />
          </div>
      )
    }
  }

export default App;
