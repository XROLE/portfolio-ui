import React, { Component } from 'react';
import './App.css';

class Hireme extends Component{
    render(){
        return(
            <div className = "container-fluid hireme">
                <div className = "container">
                    <div className = "row">
                        <div class = "col-12 col-md-6 col-lg-6">
                            <form className = "hiremeForm">
                                <p className ='text-center hiremeHeader'>HIRE ME</p>
                                <div className ="form-group">
                                    <label>Email</label>
                                    <input type = "text" className = "form-control bg-transparent text-white" placeholder = "example@gmail.com" />
                                </div>
                                <div className ="form-group">
                                    <label>Phone Number</label>
                                    <input type = "number" className = "form-control bg-transparent text-white" placeholder ="+23470 ..." />
                                </div>
                                <div className ="form-group">
                                    <label>Description of Project</label>
                                   <textarea className = "form-control bg-transparent text-white" placeholder = "I need you to build a webapp that will .... "></textarea>
                                </div>
                                <div className ="form-group">
                                    <button className = "btn btn-primary hirmeButton">Submit</button>
                                </div>
                                
                            </form>
                        </div>
                            <div class = "col-12 col-md-6 col-lg-6">
                                <div className = "row">
                                    <div className = "col-12">
                                    <p className ='webNumberAddress'>WEB</p>
                                    <p className ="webNumberAddress-contents"><i class="fa fa-envelope" style = {{color: 'rgb(252, 102, 0)'}}></i> &nbsp; xrolediamond@gmail.com </p>
                                    <p className = "webNumberAddress-contents"><i class="fas fa-globe"style = {{color: 'rgb(252, 102, 0)'}} ></i> &nbsp;xrole.com.ng </p>
                                    </div>
                                </div>
                                <div className = "row">
                                    <div className = "col-12">
                                    <p className ='webNumberAddress'>Phone Number</p>
                                    <p className ="webNumberAddress-contents"> <i class="fas fa-phone-volume"style = {{color: 'rgb(252, 102, 0)'}} ></i> &nbsp; +23470 3482 8130</p>
                                    <p className = "webNumberAddress-contents"><i class="fas fa-phone-volume"style = {{color: 'rgb(252, 102, 0)'}} ></i> &nbsp; +23480 5586 4002 </p>
                                    </div>
                                </div>
                                <div className = "row">
                                    <div className = "col-12">
                                    <p className ='webNumberAddress'>Address</p>
                                    <p className ="webNumberAddress-contents"><i class="fas fa-map-marker-alt"style = {{color: 'rgb(252, 102, 0)'}} ></i> &nbsp; 154 Murtala Mohammed Way, Yaba, Lagos Nigeria.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Hireme;