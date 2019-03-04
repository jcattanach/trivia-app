import React, { Component } from 'react';

class CurrentQuestion extends Component {
  constructor(props){
    super(props)
    this.state = {
      question: this.props.current
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.question !== this.state.question){
      this.setState({ question : nextProps})
    }
  }

  render(){

    let info = null

    if(this.props.current.length === 0){
      info = <h3>Loading...</h3>
    } else {
      info = <div>
        <h4>{this.state.question.current.question}</h4>
        <label>{this.state.question.current.correct_answer}</label>
      </div>
    }

    return (
      <div className="CurrentQuestion">
        {info}
      </div>
    );
  }
}

export default CurrentQuestion;

// info = <h3>{this.state.question.current}</h3>
