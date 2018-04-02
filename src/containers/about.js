import React, { Component } from 'react';
import '.././stylesheets/about.css';

export default class About extends Component {
  render() {
    return(
      <div className="c row aboutPage">
        <h1>About the Site</h1>
        <hr/>
        <p>"Writing Prompts" is a small app that I created for myself because I was getting tired of looking for these online.</p>
        <p>This page was created with ReactJS and the create-react-app boilerplate.</p>
        <p>I plan on creating many more microsites like this.</p>
      </div>
    );
  }
}

