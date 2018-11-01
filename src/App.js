import React, { Component } from 'react';
/*import './App.css';*/
import Arbol from './components/arbolJerarquico'
class App extends Component { 
  render() {
    return (
      <div className="App">
        <h1>Mi jerarquia</h1>       
        <Arbol/>
      </div>
    );
  }
}

export default App;
