import React from 'react';
import Quiz from '../utils/api';
import { withRouter, Link } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import '../App.css';
import Footer from './Footer/Footer';

class Home extends React.Component {
  state = {
    displayName: '',
    quizCode: '',
  };

  handleChange = (event) => {
    let { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const quizService = new Quiz();
    let addedUser = this.state.displayName;
    console.log(addedUser);
    quizService.addUsers(this.state.quizCode, addedUser).then((response) => {
      console.log(`user ${addedUser} added`, response);
      this.props.history.push(`/quiz-code/lobbygame/${this.state.quizCode}`);
    });
  };

  render() {
    return (
      <div className="quizCreation">
      <Navbar />
        <div className="home-form-wrapper">
        <h1 className="primary-home-title-create">Create a Game</h1>
          <div className="p-home-text"> 
          <br/>Write a kahoot-style quiz 
          <br/>where songs are the answers.
          <br/>Invite your friends.
          <br/>You can join the quiz too.
          <br/>All the answers will create a playlist!
          <div> <br/> </div>
            <div className="form-field">
              <Link to="/quiz-creation" className="treat-button-home-create">Create!</Link>
            </div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="p-home">
        <h1 className="primary-home-title-join">Join a Game</h1><h3 style={{color: 'white'}}>Receive an invite from a friend? </h3>
          <form className="form-home" onSubmit={this.handleFormSubmit}>
            <div className="form-field">
              <label id="label"></label>
              <input
                className="primary-input"
                type="text"
                name="displayName"
                onChange={this.handleChange}
                value={this.state.displayName}
                placeholder="Display Name"
                autoFocus
                required
              />
            </div>
            <br />
            <div className="form-field">
              <label id="label"></label>
              <input
                className="primary-input"
                type="text"
                name="quizCode"
                onChange={this.handleChange}
                value={this.state.quizCode}
                placeholder="Game Pin"
                required
              />
            </div>
            <br />
            <div className="form-field">
              <button className="treat-button-home-create">Join!
              </button>
            </div>
          </form>

        </div>
        <div>
          <Footer />
        </div>
      </div>

    );
  }
}

export default withRouter(Home);
