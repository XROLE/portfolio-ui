import React, { Component } from 'react';
import './App.css';

class Projects extends Component{
    render(){
        return(
            <div className = "container-fluid bg-white projectContainerFluid">
                <div className ="container">
                    <div className = "row projectRow">
                        <div class="card projectCard">
                            <img class="card-img-top" src='./images/currencyConverter.png' alt="Card image cap" />
                        </div>
                        <div class="card projectCard">
                            <img class="card-img-top" src='./images/serviceWorker.png' alt="Card image cap" />
                        </div>
                        <div class="card projectCard">
                            <img class="card-img-top" src='./images/exchangeRate.png' alt="Card image cap" />
                        </div>
                    </div>
                    <div className = "row projectRow">
                        <div class="card projectCard">
                            <img class="card-img-top" src='./images/ceasarCipher.png' alt="Card image cap" />
                        </div>
                        <div class="card projectCard">
                            <img class="card-img-top" src='./images/myDiary.png' alt="Card image cap" />
                        </div>
                        <div class="card projectCard">
                            <img class="card-img-top" src='./images/payFriend.png' alt="Card image cap" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Projects;