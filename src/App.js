import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './stylesheets/lit.css';
import '@ajusa/lit/dist/util.css';
import './index.css';
import './App.css';
import Home from './containers/home'
import OnJournaling from './containers/on-journaling'
import About from './containers/about'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="c row">
            <Link className="ph2" to="/">Home</Link>
            <Link className="ph2" to="/on-journaling">On Journaling</Link>
            <Link className="ph2" to="/about">About</Link>
          </div>
        </header>
        <Route exact path="/" component={Home} />
        <Route exact path="/on-journaling" component={OnJournaling} />
        <Route exact path="/about" component={About} />
      </div>
    );
  }
}

export default App;
