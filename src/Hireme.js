import React, { Component } from 'react';
import './App.css';


class Hireme extends Component{
    signUp(e){
        // getting form data
        e.preventDefault();
        const email = this.refs.email.value.trim().toLowerCase();
        const number = this.refs.number.value;
        const desc = this.refs.desc.value.trim();
        const name = 'client';
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if(!email || !number || !desc){ //Validatin form data
               this.setState(({message: this.state.message.concat('No empty field is allowed. Please make sure all the fields are filled before submitting')}))
            }else if(emailRegex.test(email) === false){
                this.setState(({message: this.state.message.concat('Please enter a valid email')}))
            }else if(number.length < 11){
                this.setState(({message: this.state.message.concat('Phone Number is not complete')}))
            }else if(number.length > 11){
                this.setState(({message: this.state.message.concat('Phone Number is too long')}))
            }else{
                const url = 'https://x-portfolio.herokuapp.com/portfolio/views';
                const data = { email: email, name: name, message: desc };

                fetch(url, { // POST DATA TO THE DATABASE
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'Content-type': 'application/json'
                    }
                })
                .then(res => console.log(JSON.stringify(res)))
                .catch(err => console.error('Error :', err));
                // UPDATE THE SUCCESS STATE
                alert('Thanks for getting in touch. I will get back to you soon.');
                window.location.reload(true);
                this.setState(({success: this.state.success.concat('Thanks for getting in touch. I will get back to you soon.')}))
        } 
        if(this.state.message.length){ // CLEAR ERROR MESSAGE AFTER OUTPUTTING IT TO THE USER
           this.setState(({message: []}));
        }
        if(this.state.success.length){ // CLEAR SUCCESS MESSAGE            
            this.setState(({success: []}));
        }


    }
    constructor(props){
        super(props);
        this.state = {
            submited: false,
            message: [],
            success: []
        }
        this.signUp = this.signUp.bind(this);
    }
    render(){
        return(
            <div className = "container-fluid hireme">
                <div className = "container">
                    <div className = "row">
                        <div class = "col-12 col-md-6 col-lg-6">
                            <form className = "hiremeForm">
                                <p className ='text-center hiremeHeader' id ="Hireme">HIRE ME</p>
                                <div className ="form-group">
                                    <label>Email</label>
                                    <input type = "text" ref = "email" className = "form-control bg-transparent text-white" placeholder = "example@gmail.com" />
                                </div>
                                <div className ="form-group">
                                    <label>Phone Number</label>
                                    <input type = "number" ref = "number" className = "form-control bg-transparent text-white" placeholder ="+23470 ..." />
                                </div>
                                <div className ="form-group">
                                    <label>Description of Project</label>
                                   <textarea ref = "desc" className = "form-control bg-transparent text-white" placeholder = "I need you to build a webapp that will .... "></textarea>
                                </div>
                                <div className ="form-group">
                                    <button className = "btn btn-primary hirmeButton" onClick={this.signUp}>Submit</button>
                                </div>
                                <div className ='formgroup' style = {{color:"red", fontSize: "0.8rem"}}>
                                    <ul id = "Messages">
                                        { 
                                            this.state.message.map((msg) => {
                                               return <li key = {msg}>{msg}</li>
                                            })
                                            

                                        }
                                    </ul>
                                        {
                                            this.state.success.map((success) => {
                                                return <li key ={success} className = "text-success">{ success }</li>
                                            })
                                        }
                                    <ul>
                                        
                                    </ul>
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