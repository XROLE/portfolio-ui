import React, { Component } from 'react';
import './App.css';

class LandingPage extends Component {
    render(){
        return (
            <div className = 'container-fluid landingPage' id = "LandingPage">
                <div className ="container">
                    <div className='row' >
                        <div className ="col-12 col-md-6 col-lg-6">
                            <h1 className="meetXrole">Meet Xrole Diamond</h1>
                            <p>A credible top nouch software developer</p>
                            <a className ="btn btn-success" href = "#Hireme">Hire Me </a>
                        </div>
                        <div className ="col-12 col-md-6 col-lg-6">
                            <p className="landingPage-image"><img className ="img-fluid landing-image" src = "./images/xrole.png" alt = "landing page image"/></p>
                        </div>
                    </div>                
                </div>
            </div>
        )
    }
}

export default LandingPage;