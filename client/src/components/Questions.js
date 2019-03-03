import React, { Component } from 'react';
import axios from 'axios'

const QUESTION_BASE_URL = 'https://opentdb.com/api.php?amount='

class Questions extends Component {

  state = {
    questionInfo: []
  }

  getQuestions = () => {
      axios.get(QUESTION_BASE_URL + '10')
      .then((response) => {
        let questionInfo = response.data.results
        this.setState({
          questionInfo
        })
      }).then(console.log(this.state))
      .catch(function (error) {
        console.log(error);
      });
  }


  render() {
    return (
      <div className="Questions">
        Questions
        <button onClick={this.getQuestions}>Get Questions</button>
      </div>
    );
  }
}

export default Questions;
