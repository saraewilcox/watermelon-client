import React from 'react';
import Quiz from '../utils/api';
import SpotifyPlayer from 'react-spotify-player';
import {withRouter} from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Confetti from 'react-confetti';
import Footer from './Footer/Footer';

class Playlist extends React.Component {
  state = {
    render: false,
    playlist: null,
  };

  componentDidMount() {
    setTimeout(function() { //Start the timer
      this.setState({render: true}) //After 2 second, set render to true
      }.bind(this), 2000)
    const code = this.props.match.params.quizCode;
    let userToken = this.props.loggedInUser.accessToken;
    const quizService = new Quiz();
    quizService.getSongs(code, userToken).then((response) => {
      console.log(response.data);
      this.setState({
        playlist: response.data,
      });
    });
  }

  render() {
    const ConfettiWidth=1250
    const ConfettiHeight=650

    const size = {
      width: "75%",
      height: 500,
    };
    const view = 'list'; 
    const theme = 'white'; 
    let renderContainer = false
const {playlist} = this.state;
    if(this.state.render) {
      renderContainer =
      <div className="quizcode-wrapper">
        <div>
          <Navbar />
        </div>
        <h2 className="primary-subtitle">Here's the Playlist</h2>
        {playlist !== null && (
          <div>
            <SpotifyPlayer
              uri={playlist}
              size={size}
              view={view}
              theme={theme}
            />
            <Confetti
              width={ConfettiWidth}
              height={ConfettiHeight}
            />
        </div>
        )}
        <div>
          <Footer />
        </div>
      </div>    
    }
  return renderContainer
  }
}
export default withRouter(Playlist);
