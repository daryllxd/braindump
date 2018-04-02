import { writing_prompts } from '.././data.json';
import React, { Component } from 'react';

class WritingPromptButtons extends Component {
  render() {
    if (this.props.writingPrompts.length > 1) {
      return(
        <button className="btn bg-black b-info white" onClick={this.props.thingie}>Get New Prompt</button>
      );
    }
    else {
      return (
        <button className="btn bg-accent b-warning white">No more prompts, thank you!</button>
      );
    }
  }
}

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state= { writingPrompts: ['swag'], displayedPrompt: 'I like turtles' }
  }

  loadFromServer = () => {
    this.setState({writingPrompts: writing_prompts})
  }

  sample = () => {
    let { displayedPrompt, writingPrompts } = this.takeRandomElement(this.state.writingPrompts);

    this.setState({
      displayedPrompt: displayedPrompt,
      writingPrompts: writingPrompts
    })
  }

  takeRandomElement = (arr) => {
    let index = Math.random() * arr.length;
    let rand = arr[index | 0];

    return {
      writingPrompts: arr.filter(e => e!== rand),
      displayedPrompt: rand.prompt
    };
  }

  componentDidMount() {
    this.loadFromServer()
  }

  render() {
    return(
      <div>
        <h1>{this.state.displayedPrompt}</h1>
        <WritingPromptButtons  writingPrompts={this.state.writingPrompts} thingie={this.sample}/>
      </div>
    );
  }
}

