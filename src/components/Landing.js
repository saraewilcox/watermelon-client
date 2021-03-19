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
        <h4>A blend of kahoot and Spotify!</h4>
        <div className="login-button">
            <button className="landing-page-login"
            onClick={(e) => {
            e.preventDefault();
            window.location.href="/login-spotify";
            }}> Log in to Spotify</button>
        </div>
    </div>
    </div>
  )};


export default Login;