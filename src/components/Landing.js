import React, {useEffect} from 'react';
import video from '../video/movie/watermelon-short-vid.mp4';

const Login = () => {

  useEffect(() => {
    console.log('hi');
  }, [])

  return (
    <div className="home-wrapper">
    <video src={video} id="video-home" autoPlay loop muted
    style= {{
    position:"absolute",
    width:"100%",
    left: "50%",
    top: "50%",
    height: "100%",
    objectFit: "cover",
    transform: "translate(-50%, -50%)",
    zIndex: "-1"
    }}
    >
    </video>
    <div className="login-div">
        <h1>watermelon</h1>
        <h3>A blend of kahoot and Spotify!</h3>

        <h3>A Spotify Premium account is required. 
          <br/>Don't blame me, them's the Spotify rules for third-party apps.</h3>
        <div className="login-button">
            <button className="landing-page-login"
            onClick={(e) => {
            e.preventDefault();
            window.location.href="/login-spotify";
            }}> Log in to Spotify</button>
        </div>
        <h4>OAuth doesn’t share password data but instead uses authorization tokens 
          <br/>to prove an identity between consumers and service providers. 
          <br/>OAuth is an authentication protocol that allows you to approve one 
          <br/>application interacting with another on your behalf without giving away your password.</h4>
    </div>
    </div>
  )};


export default Login;