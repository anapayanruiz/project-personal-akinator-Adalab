import React from 'react';
import '../stylesheets/App.css';
import questions from '../data/questions.json';
import adalabers from '../data/users.json';
import Question from './Question';
import Answers from './Answers';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions,
      adalabers,
      step: 0,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(value) {
    const answerValue = value === 'Si';
    this.setState((prevState) => {
      return {
        step: prevState.step + 1,
        adalabers: prevState.questions[prevState.step].answers.filter(answer => {
          return answer.answer === answerValue
        })
        // ...spread añadir el estado del la pregunta
      }
    });
  }



  // function filterAdalabers() {
    
  // }


  // function saber la siguiente pregunta

  render() {
    console.log(this.state.adalabers);
    
    // function nº de descartadas es mas de 1
    const { question } = questions[this.state.step];
    return (
      <div className="page">
        <Question
          question={question} />
        <Answers
          handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
