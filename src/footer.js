import React, {Component} from 'react';
import './App';

class Footer extends Component {
    render(){
        return(
            <div className = "container-fluid footerContainerFluid">
                <div className = "container">
                    <div className = "row">
                        <div className ="text-center"></div>
                        <p className="text-center footerText">&copy; xrole 2018</p>     
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer;