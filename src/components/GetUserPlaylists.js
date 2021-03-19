import React from 'react';
import {withRouter} from 'react-router-dom';
import Quiz from '../utils/api';
import Navbar from './Navbar/Navbar';
import Footer from './Footer/Footer';


class GetUserPlaylists extends React.Component {
    state = {
      render: false,
      userplaylists: null,
    };
  
    componentDidMount() {
      setTimeout(function() { //Start the timer
        this.setState({render: true}) //After 2 second, set render to true
        }.bind(this), 2000)
      //let userplaylists = this.props.loggedInUser.userplaylists;
      let userplaylists = '';
      //let userName = this.props.loggedInUser.username;
      const quizService = new Quiz();
      let userToken = this.props.loggedInUser.accessToken;
      quizService.getPlaylists(userplaylists, userToken).then((response) => {
        console.log(response.data);
        this.setState({
          userplaylists: response.data,
        });
      });
    }

    render() {

        let renderContainer = false
        const {userplaylists} = this.state;
        if(this.state.render) {
          renderContainer =
          <div className="quizcode-wrapper">
            <div>
              <Navbar />
            </div>
            <h2 className="primary-subtitle">Here's your Playlists</h2>

              <div>
                {userplaylists}
                

            </div>

            <div>
              <Footer />
            </div>
          </div>    
        }
      return renderContainer
      }
    }

export default withRouter(GetUserPlaylists);