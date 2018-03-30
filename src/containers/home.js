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

class Home extends Component {
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
    return(
      <div>
        <h1>Home</h1>
        <WritingPromptContainer writingPrompts={this.state.writing_prompts}/>
      </div>
    );
  }
}

export default Home;
