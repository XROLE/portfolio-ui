import React, { Component } from 'react';
import './App.css';

class Projects extends Component{
    render(){
        return(
            <div className = "container-fluid bg-white projectContainerFluid" >
                <div className ="container">
                    <div className = "row projectRow">
                        <div className="card projectCard">
                            <a href = "https://xrole.github.io/CurrencyConverter/" target = "_blank">
                                <img className="card-img-top" src='./images/currencyConverter.png' alt="Card image cap" />
                            </a>
                        </div>
                        <div class="card projectCard">
                            <a href = "https://xrole.herokuapp.com/" target = "_blank">
                                <img className="card-img-top" src='./images/serviceWorker.png' alt="Card image cap" />
                            </a>
                        </div>
                        <div class="card projectCard">
                            <a href = "https://xrole.github.io/exchangeRate/" target = "_blank">
                                <img className="card-img-top" src='./images/exchangeRate.png' alt="Card image cap" />
                            </a>
                        </div>
                    </div>
                    <div className = "row projectRow">
                        <div class="card projectCard">
                            <a href = "https://xrole.github.io/Ceasar-Cipher/" target = "_blank">
                                <img className="card-img-top" src='./images/ceasarCipher.png' alt="Card image cap" />
                            </a>
                        </div>
                        <div class="card projectCard">
                            <a href = "https://xrole.github.io/My-Diary/UI/" target = "_blank">
                                <img className="card-img-top" src='./images/myDiary.png' alt="Card image cap" />
                            </a>
                        </div>
                        <div class="card projectCard">
                            <a href = "https://xrole.github.io/Frontend-test/" target = "_blank">
                                <img className="card-img-top" src='./images/payFriend.png' alt="Card image cap" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Projects;