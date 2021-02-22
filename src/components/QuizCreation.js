import React from 'react';
import Quiz from '../utils/api';
import { withRouter } from 'react-router-dom';
import Navbar from './Navbar/Navbar';

class QuizCreation extends React.Component {
  state = {
    render: false,
    title: '',
    description: '',
    questions: {
      question1: '',
      question2: '',
      question3: '',
      question4: '',
      question5: '',
    },
    code: 0,
  };

  componentDidMount() {
    setTimeout(function() { //Start the timer
        this.setState({render: true}) //After 1 second, set render to true
    }.bind(this), 1000)
  }

  handleChange = (event) => {
    let { name, value } = event.target;
    this.setState((prevState) => ({
      questions: {
        // object that we want to update
        ...prevState.questions, // keep all other key-value pairs
        [name]: value, // update the value of specific key
      },
    }));
  };

  handleChangeTitleDescription = (event) => {
    let { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const quizService = new Quiz();
    const questions = this.state.questions;
    const myQuestions = Object.values(questions);
    const playlistTitle = this.state.title;
    const playlistDescription = this.state.description;
    quizService
      .addQuestionsAndQuizCode(
        localStorage.getItem('loggedInUser'),
        myQuestions,
        playlistTitle,
        playlistDescription
      )
      .then((myQuestions) => {
        console.log(questions);
        this.setState({
          code: myQuestions.data.quizCode,
        });
        console.log(this.state.code);
        this.props.history.push(`/quiz-code/${this.state.code}`);
      });
  };

  render() {
    let renderContainer = false
    if(this.state.render) {
      renderContainer = 
      <div className="quizCreation">
      <Navbar />
      <h1 className="primary-title">Create your game! Use the ideas below or<br/> come up with your own questions</h1>
      <form onSubmit={this.handleFormSubmit}>
        <div className="title-description-section">
          <div className="question">
            <div className="labelQuestion">
            </div>
            <div className="inputQuestion">
              <input
                className="primary-input"
                type="text"
                name="title"
                onChange={this.handleChangeTitleDescription}
                value={this.state.title}
                placeholder="Playlist Title"
                required
              />
            </div>
          </div>
          <div className="question">
            <div className="labelQuestion">
            </div>
            <div className="inputQuestion">
              <input
                className="primary-input"
                type="textarea"
                name="description"
                onChange={this.handleChangeTitleDescription}
                value={this.state.description}
                placeholder="Describe your playlist "
              />
            </div>
          </div>
        </div>
        <div className="questions-1-2-3">
          <div className="question">
            <div className="labelQuestion">
            </div>
            <div className="inputQuestion">
              <input
                className="primary-input"
                style={{width:"280px"}}
                type="text"
                name="question1"
                onChange={this.handleChange}
                value={this.state.questions.question1}
                placeholder="1. What song gets you energized?"
                required
              />
            </div>
          </div>
          <div className="question">
            <div className="labelQuestion">
            </div>
            <div className="inputQuestion">
              <input
                className="primary-input"
                style={{width:"360px"}}
                type="text"
                name="question2"
                onChange={this.handleChange}
                value={this.state.questions.question2}
                placeholder="2. What song makes you want to dance?"
                required
              />
            </div>
          </div>
          <div className="question">
            <div className="labelQuestion">
            </div>
            <div className="inputQuestion">
              <input
                className="primary-input"
                style={{width:"330px"}}
                type="text"
                name="question3"
                onChange={this.handleChange}
                value={this.state.questions.question3}
                placeholder="3.What song brings the romance?"
                required
              />
            </div>
          </div>
        </div>
        <div className="questions-4-5">
        <div className="question">
          <div className="labelQuestion">
          </div>
          <div className="inputQuestion">
            <input
              className="primary-input"
              style={{width:"330px"}}
              type="text"
              name="question4"
              onChange={this.handleChange}
              value={this.state.questions.question4}
              placeholder="4.What song are you embarrassed to like?"
              required
            />
          </div>
        </div>
        <div className="question">
          <div className="labelQuestion">
          </div>
          <div className="inputQuestion">
            <input
              className="primary-input"
              style={{width:"300px"}}
              type="text"
              name="question5"
              onChange={this.handleChange}
              value={this.state.questions.question5}
              placeholder=" 5. What's your all-time favorite song?"
              required
            />
          </div>
        </div>
        </div>
        <div className="form-field">
        <button className="treat-button-home">Submit!</button>
        </div>
      </form>
    </div>
    }
    return renderContainer
    } 
  }


export default withRouter(QuizCreation);
