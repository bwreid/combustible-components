import React, { Component } from 'react';
import './App.css';
import FireworksList from './components/FireworksList'

class App extends Component {
  render() {
    return (
      <main>
        <div className="jumbotron jumbotron-fluid bg-danger text-white">
          <div className="container">
            <h1 className="display-3">Combustible Components</h1>
          </div>
        </div>
        <FireworksList />
      </main>
    );
  }
}

export default App;
