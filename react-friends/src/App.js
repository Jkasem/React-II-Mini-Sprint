import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { people } from './people.js';
import { PeopleList } from './PeopleList.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      People: []
    }
  }

componentDidMount() {
  this.setState({People: people});
}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Look at all these people!</h1>
        </header>
        <PeopleList people={this.state.People} />
      </div>
    );
  }
}

export default App;
