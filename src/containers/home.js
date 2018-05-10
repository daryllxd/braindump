import { writing_prompts } from 'data.json';
import React, { Component } from 'react';
import 'stylesheets/home.css';
import moment from 'moment';

const DisplayedPrompt = ({ prompt }) => {
  return (
    <div>
      <h1 className="displayedPrompt">{prompt.prompt}</h1>
      <code className="source">Source: {prompt.source}</code>
    </div>
  )
}

class WritingPromptButtons extends Component {
  render() {
    if (this.props.writingPrompts.length > 0) {
      return(
        <span>
          <button className="btn primary mr2" onClick={this.props.onClickHandler}>Get New Prompt</button>
          <button className="btn info mr2" onClick={this.props.viewYesterday}>Yesterday's Prompt</button>
          <button className="btn black mr2" onClick={this.props.viewTomorrow}>The Next Day's Prompt</button>
        </span>
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

    this.state= { writingPrompts: ['swag'], displayedPrompt: 'Default prompt', writingPromptDate: moment() }
  }

  loadFromServer = () => {
    this.setState({writingPrompts:  writing_prompts}, this.getTodaysPrompt);
  }

  getPromptForDate = (dateString) => {
    let arr = this.state.writingPrompts;

    return arr.find(e => e.date === dateString);
  }

  dateInWritingPromptFormat = (date = this.state.writingPromptDate) => {
    return date.format('M-D');
  }

  getTodaysPrompt = () => {
    let currentDate = this.dateInWritingPromptFormat();
    let promptForToday = this.getPromptForDate(currentDate);

    this.setState({ displayedPrompt: promptForToday });
  }

  displayYesterdaysPrompt = () => {
    let yesterday = this.state.writingPromptDate.subtract(1, 'day')
    let promptForYesterday = this.getPromptForDate(this.dateInWritingPromptFormat(yesterday));

    this.setState({ displayedPrompt: promptForYesterday });
  }

  displayTomorrowsPrompt = () => {
    let tomorrow = this.state.writingPromptDate.add(1, 'day')
    let promptForYesterday = this.getPromptForDate(this.dateInWritingPromptFormat(tomorrow));

    this.setState({ displayedPrompt: promptForYesterday });
  }


  sample = () => {
    let { displayedPrompt, writingPrompts } = this.takeRandomElement(this.state.writingPrompts);

    this.setState({
      displayedPrompt: displayedPrompt,
      writingPrompts: writingPrompts
    })
  }

  promptMessage = () => {
    return `The Writing Prompt for ${this.state.writingPromptDate.format('MMM D')}:`
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
          <h1 className="promptReminder">{ this.promptMessage() }</h1>
          <hr/>
          <DisplayedPrompt prompt={this.state.displayedPrompt}/>
          <WritingPromptButtons  writingPrompts={this.state.writingPrompts} onClickHandler={this.sample} viewYesterday={this.displayYesterdaysPrompt} viewTomorrow={this.displayTomorrowsPrompt}/>
        </div>
      </div>
    );
  }
}

