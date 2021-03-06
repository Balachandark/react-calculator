import React, { Component } from 'react';
import './App.css';
import KeypadComponent from './components/KeypadComponent';
import ResultComponent from './components/ResultComponent';

class App extends Component {

  constructor(props) {
    super(props); 

    this.state = {
      result: '',
    }
  }

  onClick = ( e ) => {
    const button = e.target.name;
    if( button === '=' ) {
      this.calculate()
    }

    else if(  button === 'C' ) {
      this.reset();
    }
    
    else if( button === 'CE' ) {
      this.backspace();
    }
    else {
      console.log( this.state.result );
      console.log( button );
      this.setState({
        result: this.state.result + button
      })
    }
  }

  calculate = () => {
    try {
      this.setState({
        // eslint-disable-next-line.
        result: ( eval( this.state.result ) || '' ) + ''
      })
    } catch(e) {
      this.setState({
        result: 'error'
      })
    }
  }

  reset = () => {
    this.setState({
      result: ''
    })
  }

  backspace = () => {
    this.setState({
      result: this.state.result.slice( 0, -1 )
    })
  }
  
  render() {
    return (
      <div className="App">
        <ResultComponent result={this.state.result}/>
        <KeypadComponent onClick={this.onClick}/>
      </div>
    );
  }
}

export default App;
