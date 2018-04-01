import React, { Component } from 'react';

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

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state= { writingPrompts: ['swag'], displayedPrompt: 'I like turtles' }
  }

  loadFromServer = () => {
    let url = "http://localhost:9292/hello-world.json";

    fetch(url)
      .then((response) => response.json())
      .then( (data) => this.setState({writingPrompts:  data.writing_prompts}));
  }

  sample = () => {
    let rand = this.state.writingPrompts[(Math.random() * this.state.writingPrompts.length) | 0].prompt

    this.setState({ displayedPrompt: rand });
  }

  componentDidMount() {
    this.loadFromServer()
  }

  render() {
    return(
      <div>
        <h1>{this.state.displayedPrompt}</h1>
        <button className="btn bg-black b-info white" onClick={this.sample}>Get New Prompt</button>
      </div>
    );
  }
}

