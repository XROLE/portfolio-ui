import React, { Component } from 'react';
import './App.css';

class Navbar extends Component{
    render(){
        return (
            <nav className="navbar navbar-expand-lg fixed-top" >
                <a className="navbar-brand" href="#LandingPage">Meet Xrole</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" >
                    <ul className="navbar-nav mr-auto">                        
                        <li className="nav-item">
                            <a className="nav-link" href = "#LandingPage">About</a>
                        </li>        
                        <li className="nav-item">
                            <a className="nav-link" href = "#Services">Services</a>
                        </li>        
                        <li className="nav-item">
                            <a className="nav-link" href = "#Works" >Works</a>
                        </li>        
                        <li className="nav-item">
                            <a className="nav-link" href = "#Hireme" >Hire me</a>
                        </li> 
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;