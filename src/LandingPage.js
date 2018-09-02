import React, { Component } from 'react';
import './App.css';

class LandingPage extends Component {
    render(){
        return (
            <div className = 'container landingPage'>
                <div className='row' >
                    <div className ="col-12 col-md-6 col-lg-6">
                        <h1 className="meetXrole">Meet Xrole Diamond</h1>
                        <p>A credible top nouch software developer</p>
                        <a className ="btn btn-success">Hire Me </a>
                    </div>
                    <div className ="col-12 col-md-6 col-lg-6">
                        <p className="landingPage-image"><img className ="img-fluid" src = "./images/xrole.png" alt = "landing page image"/></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingPage;