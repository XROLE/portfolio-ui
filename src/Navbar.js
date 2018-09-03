import React, { Component } from 'react';
import './App.css';

class Navbar extends Component{
    render(){
        return (
            <nav className="navbar navbar-expand-lg fixed-top" >
                <a className="navbar-brand" href="github.com/xrole">Meet Xrole</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">                        
                        <li className="nav-item">
                            <a className="nav-link">About</a>
                        </li>        
                        <li className="nav-item">
                            <a className="nav-link" >Services</a>
                        </li>        
                        <li className="nav-item">
                            <a className="nav-link" >Works</a>
                        </li>        
                        <li className="nav-item">
                            <a className="nav-link" >Hire me</a>
                        </li> 
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;