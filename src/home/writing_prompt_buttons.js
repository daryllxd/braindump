import React, { Component } from 'react';

export default class WritingPromptButtons extends Component {
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

