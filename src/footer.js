import React, {Component} from 'react';
import './App';

class Footer extends Component {
    render(){
        return(
            <div className = "container-fluid footerContainerFluid">
                <div className = "container">
                    <div className = "row">
                        <div className ="col">
                            <p className="footericon">
                            <a href = "https://twitter.com/diamondpix6706" target ="_blank"> <i class="fab fa-twitter"> </i></a> &nbsp; &nbsp; 
                            <a href = "https://web.facebook.com/profile.php?id=100019388493146" target = "_blank"><i class="fab fa-facebook-f"> </i></a> &nbsp;  &nbsp; 
                            <a href ="https://github.com/XROLE" target = "_blank"> <i class="fab fa-slack"></i> </a>&nbsp;  &nbsp;
                            <a href ="https://github.com/XROLE" target = "_blank"> <i class="fab fa-github"></i></a></p>     
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