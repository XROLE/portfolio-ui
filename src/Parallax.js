import React, {Component} from 'react';
import './App.css';

class Parallax extends Component {
    render(){
        return(
            <div className =" contaner-fluid parallax">
                <div className = "container">
                    <div className = "row">
                        <div className = "col">
                            <p className = "parralaxText"> GET YOUR PROJECT DONE WITHIN 72 HOURS</p>            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Parallax;