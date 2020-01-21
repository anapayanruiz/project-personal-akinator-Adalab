import React from 'react';
import '../stylesheets/App.css';
import questionsData from '../data/question.json';
import Question from './Question';
import Answers from './Answers';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: questionsData,
      step: 0,
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(value) {
    console.log('hago click', value);
    this.setState((prevState) => {
      return {
        step: prevState.step + 1,
        // ...spread añadir el estado del la pregunta
      }
    })
  }

  // function saber la siguiente pregunta

  render() {
    // function nº de descartadas es mas de 1
    const { question } = questionsData[this.state.step];
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
