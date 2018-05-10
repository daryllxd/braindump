import { writing_prompts } from 'data.json';
import React, { Component } from 'react';
import 'stylesheets/home.css';
import moment from 'moment';
import { dateInWritingPromptFormat } from 'utilities/date_parse';
import WritingPromptButtons from 'home/writing_prompt_buttons';
import { DisplayedPrompt } from 'home/displayed_prompt';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state= { writingPrompts: ['swag'], displayedPrompt: 'Default prompt', writingPromptDate: moment() }
  }

  loadFromServer = () => {
    this.setState({writingPrompts:  writing_prompts}, this.getTodaysPrompt);
  }


  setPromptForDate = (date = this.state.writingPromptDate) => {
    let prompt = this.getPromptForDate(dateInWritingPromptFormat(date));

    if (prompt) {
      this.setState({displayedPrompt: prompt})
    }
    else {
      this.sample();
    }
  }


  getPromptForDate = (dateString) => {
    let arr = this.state.writingPrompts;

    return arr.find(e => e.date === dateString);
  }

  getTodaysPrompt = () => {
    this.setPromptForDate();
  }

  displayYesterdaysPrompt = () => {
    this.setPromptForDate(this.state.writingPromptDate.subtract(1, 'day'));
  }

  displayTomorrowsPrompt = () => {
    this.setPromptForDate(this.state.writingPromptDate.add(1, 'day'));
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

