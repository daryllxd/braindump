import { writing_prompts } from '.././data.json';
import React, { Component } from 'react';
import '.././stylesheets/home.css';

const DisplayedPrompt = ({ prompt }) => {
  return (
    <div>
      <h1 className="displayedPrompt">{prompt.prompt}</h1>
      <code>Source: {prompt.source}</code>
    </div>
  )
}

class WritingPromptButtons extends Component {
  render() {
    if (this.props.writingPrompts.length > 0) {
      return(
        <button className="btn primary" onClick={this.props.onClickHandler}>Get New Prompt</button>
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

    this.state= { writingPrompts: ['swag'], displayedPrompt: 'Default prompt' }
  }

  loadFromServer = () => {
    this.setState({writingPrompts:  writing_prompts}, this.getTodaysPrompt);
  }

  getCurrentDate = () => {
    let date = new Date();

    return `${date.getMonth() + 1}-${date.getDay() + 1}`
  }

  getTodaysPrompt = () => {
    let arr = this.state.writingPrompts;
    let currentDate = this.getCurrentDate();
    let promptForToday = arr.find(e => e.date === currentDate);

    this.setState({ displayedPrompt: promptForToday });
  }

  sample = () => {
    let { displayedPrompt, writingPrompts } = this.takeRandomElement(this.state.writingPrompts);

    this.setState({
      displayedPrompt: displayedPrompt,
      writingPrompts: writingPrompts
    })
  }

  takeRandomElement = (arr) => {
    let randomElement = arr[(Math.random() * arr.length) | 0];
    let filteredArray = arr.filter(e => e!== randomElement);

    return {
      writingPrompts: filteredArray,
      displayedPrompt: randomElement
    };
  }

  componentDidMount() {
    this.loadFromServer()
  }

  render() {
    return(
      <div className="c Aligner">
        <div>
          <h2 className="promptReminder">Today's Writing Prompt is:</h2>
          <hr/>
          <DisplayedPrompt prompt={this.state.displayedPrompt}/>
          <WritingPromptButtons  writingPrompts={this.state.writingPrompts} onClickHandler={this.sample}/>
        </div>
      </div>
    );
  }
}

