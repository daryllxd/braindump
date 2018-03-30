import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './containers/home'
import OnJournaling from './containers/on-journaling'
import About from './containers/about'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Writing Prompts</h1>
          <Link to="/">Home</Link>
          <Link to="/on-journaling">On Journaling</Link>
          <Link to="/about">About</Link>
        </header>
        <Route exact path="/" component={Home} />
        <Route exact path="/on-journaling" component={OnJournaling} />
        <Route exact path="/about" component={About} />
      </div>
    );
  }
}

export default App;
