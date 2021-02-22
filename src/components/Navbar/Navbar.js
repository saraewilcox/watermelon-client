import { MenuItem } from '@material-ui/core';
import React, { Component } from 'react';
import { Button } from './Button';
import { MenuItems } from './MenuItems';
import './Navbar.css';

class Navbar extends Component {
    state= { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    handleLogout(e) {
        e.preventDefault();
        window.open('https://accounts.spotify.com/logout');
        window.location.replace('/');
      }

    render () {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo"> <a href={'/'} style={{textDecoration:"none", color:"white"}}>Watermelon</a> <i className="fab fa-spotify"></i></h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                    
                </ul>
                <Button onClick={this.handleLogout}>Log Out</Button>
            </nav>
        )
    }
}

export default Navbar;