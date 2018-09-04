import React, {Component} from 'react';
import './App.css';

class Services extends Component{
    render(){
        return(
            <div className="container-fluid serviceContainerFluid ">
                <div className ="container serviceContainer">
                    <div className="row">
                        <div className = "col-12 col-md-6 col-lg-6"> 
                            <img className ="img-fluid web-icon" src ='./images/web.png' alt = 'Web development services' />
                        </div>
                        <div className = "col-12 col-md-6 col-lg-6"> 
                            <h3>Web Development</h3>
                            <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>
                            {/* <a className ="btn btn-success text-white"> Hire Me </a> &nbsp;  */}
                            <a className ="btn btn-primary text-white"> Get Intouch </a>
                        </div>                        
                    </div>
                    <div className = "row educationRow">
                        <div className = "col-12 col-md-6 col-lg-6"> 
                            <img className ="img-fluid web-icon" src ='./images/education.png' alt = 'Web development services' />
                        </div>
                        <div className = "col-12 col-md-6 col-lg-6"> 
                            <h3>Facilitator and Mentorship</h3>
                            <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English</p>
                            {/* <a className ="btn btn-success text-white"> Hire Me </a> &nbsp;  */}
                            <a className ="btn btn-primary text-white"> Get Intouch </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Services;