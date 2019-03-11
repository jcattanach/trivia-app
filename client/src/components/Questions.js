import React, { Component } from 'react';
import axios from 'axios'

const Trivia = require('trivia-api')
const trivia = new Trivia({ encoding: 'url3986' });
const categoryArray = [
{id: 9, name: "General Knowledge"},
{id: 10, name: "Entertainment: Books"},
{id: 11, name: "Entertainment: Film"},
{id: 12, name: "Entertainment: Music"},
{id: 13, name: "Entertainment: Musicals & Theatres"},
{id: 14, name: "Entertainment: Television"},
{id: 15, name: "Entertainment: Video Games"},
{id: 16, name: "Entertainment: Board Games"},
{id: 17, name: "Science & Nature"},
{id: 18, name: "Science: Computers"},
{id: 19, name: "Science: Mathematics"},
{id: 21, name: "Sports"},
{id: 22, name: "Geography"},
{id: 23, name: "History"},
{id: 24, name: "Politics"},
{id: 25, name: "Art"},
{id: 26, name: "Celebrities"},
{id: 27, name: "Animals"},
{id: 28, name: "Vehicles"},
{id: 29, name: "Entertainment: Comics"}
]

class Questions extends Component {

  state = {
    questions: [],
    currentQuestion: []
  }

  getQuestions = () => {

      let options = {
        amount: 5,
        difficulty: 'easy',
        category: i,
        type: 'boolean'
      }

      trivia.getQuestions(options)
      .then(questions => {
        return questions.results
      }).then((array)=>{
        console.log(array)
        this.setState({
          questions: array
        })
      }
    )
    .catch(console.error);
    }


  setCurrent = (num) => {
    this.setState({
      currentQuestion: this.state.questionInfo[num]
    })
  }

  myTimeout = () => {
    let i = 0
    this.setCurrent(i)
    setTimeout(()=>{
      i++
      this.setCurrent(i)
    }, 2000)
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
