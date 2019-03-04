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
        <h4><u>Question</u></h4>
          <h5>{this.state.question.current.question}</h5>
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
