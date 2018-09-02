import React, { Component } from 'react';
import './App.css';

class Navbar extends Component{
    render(){
        return (
            <nav className="navbar navbar-expand-lg" >
                <a className="navbar-brand" href="github.com/xrole">Meet Xrole</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">                        
                        <li className="nav-item">
                            <a className="nav-link" href="github.com/xrole">About</a>
                        </li>        
                        <li className="nav-item">
                            <a className="nav-link" href="github.com/xrole">Services</a>
                        </li>        
                        <li className="nav-item">
                            <a className="nav-link" href="github.com/xrole">Works</a>
                        </li>        
                        <li className="nav-item">
                            <a className="nav-link" href="github.com/xrole">Hire me</a>
                        </li> 
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Navbar;