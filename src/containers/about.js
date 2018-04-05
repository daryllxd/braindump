import React, { Component } from 'react';
import '.././stylesheets/about.css';

class FeedbackForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email:  '',
      name:  '',
      comment: ''
    }
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  render () {
    return (
      <div>
        <h3>What do you think?</h3>
        <form action="https://formspree.io/daryll.santos@gmail.com" method="POST">
          <div className="row aboutPageFormParent">
            <div className="6 col aboutPageFormChild">
              <label>Email Address (required):</label>
              <input type="email" className="card w-95" name="email" placeholder="Email" ref="email" required onChange={this.handleChange}/>
            </div>
          </div>
          <div className="row aboutPageFormParent">
            <div className="6 col aboutPageFormChild">
              <label>Name (optional):</label>
              <input type="text" className="card w-95" name="name" placeholder="Name" ref="name" required onChange={this.handleChange}/>
            </div>
          </div>
          <div className="row aboutPageFormParent">
            <div className="6 col aboutPageFormChild">
              <label>Comment (required):</label>
              <textarea className="card w-95" name="comment" rows="10" cols="50" placeholder="Your constructive comment :)" required onChange={this.handleChange}></textarea>
            </div>
          </div>
          <div className="6 col w-95">
            <input className="btn primary card w-100" type="submit" value="Comment"/>
          </div>
        </form>
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

