import React from 'react';
import { Route, Switch } from 'react-router'
import logo from './logo.svg';
import './App.css';
import NavBox from './components/NavBox'
import { default as Main } from './components/Main/Layout'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{height: '100%'}}>
        <NavBox />
        <Switch>
          <Route exact path="/" render={() => (
            <Main />
          )} />
          <Route render={() => (
            <Main />
          )} />
        </Switch>
      </div>
    )
  }
}
/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

export default App;
