import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class WritingPromptContainer extends Component {
  render() {
    const prompts = this.props.writingPrompts;

    const haha = prompts.map ( (prompt) => (
      <p key={prompt.id}>{prompt.prompt}, {prompt.source}</p>
    ));

    return (
      <div>
        {haha}
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props);

    this.state= { writing_prompts: ['swag'] }
  }

  loadFromServer = () => {
    let url = "http://localhost:9292/hello-world.json";

    fetch(url)
      .then((response) => response.json())
      .then( (data) => this.setState({writing_prompts:  data.writing_prompts}));
  }

  componentDidMount() {
    this.loadFromServer()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Writing Prompts</h1>
        </header>
        <WritingPromptContainer writingPrompts={this.state.writing_prompts}/>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
