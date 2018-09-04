import React, {Component} from 'react';
import './App';

class Footer extends Component {
    render(){
        return(
            <div className = "container-fluid footerContainerFluid">
                <div className = "container">
                    <div className = "row">
                        <div className ="col">
                            <p className="footericon"> <i class="fab fa-twitter"></i> &nbsp; &nbsp; <i class="fab fa-facebook-f"> </i> &nbsp;  &nbsp; <i class="fab fa-whatsapp"></i> &nbsp;  &nbsp; <i class="fab fa-slack"></i>&nbsp;  &nbsp; <i class="fab fa-github"></i></p>     
                        </div>                        
                    </div>
                </div>
                <div className = "container">
                    <div className = "row">
                        <div className ="col text-center">
                            <p className=" footerText">&copy; xrole 2018</p>     
                        </div>                        
                    </div>
                </div>
            </div>
        )
    }
}
export default Footer;