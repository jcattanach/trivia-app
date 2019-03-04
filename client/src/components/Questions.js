import React, { Component } from 'react';
import axios from 'axios'
import CurrentQuestion from './CurrentQuestion'

const QUESTION_BASE_URL = 'https://opentdb.com/api.php?amount='

// Create a new component CURRENT_QUESTION and send the current question as a prop
// and use componentWillRecieveProps lifecycle


class Questions extends Component {

  state = {
    questionInfo: [],
    currentQuestion: []
  }

  getQuestions = () => {
      axios.get(QUESTION_BASE_URL + '10')
      .then((response) => {
        let questionInfo = response.data.results
        this.setState({
          questionInfo
        })
      }).then(()=>{
        this.setCurrent()
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  setCurrent = () => {
    this.setState({
      currentQuestion: this.state.questionInfo[0]
    })
  }


  render() {

    return (
      <div className="Questions">
        Questions
        <button onClick={this.getQuestions}>Get Questions</button>
        <CurrentQuestion current={this.state.currentQuestion}/>
      </div>
    );
  }
}

export default Questions;
