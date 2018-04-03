import React, { Component } from 'react';
import '.././stylesheets/about.css';

class FeedbackForm extends Component {
  render () {
    return (
      <div>
        <h3>What do you think?</h3>
        <div className="row aboutPageFormParent">
          <div className="6 col aboutPageFormChild">
            <label>Name or Email:</label>
            <input className="card w-95" placeholder="Name or Email" ref="name"/>
          </div>
        </div>
        <div className="row aboutPageFormParent">
          <div className="6 col aboutPageFormChild">
            <label>Comment:</label>
            <textarea className="card w-95" name="textarea"
              rows="10" cols="50">Write something here</textarea>
          </div>
        </div>
        <div className="6 col w-95">
          <input className="btn primary card w-100" type="submit" value="Comment"/>
        </div>
      </div>
    );
  }
}

export default class About extends Component {
  render() {
    return(
      <div className="c aboutPage">
        <h1>About the Site</h1>
        <hr/>
        <p>"Writing Prompts" is a small app that I created for myself because I was getting tired of looking for these online.</p>
        <p>This page was created with ReactJS and the create-react-app boilerplate.</p>
        <p>I plan on creating many more microsites like this.</p>
        <hr/>
        <FeedbackForm />
      </div>
    );
  }
}

