import React, {Component} from 'react';
import './App.css';

class Parallax extends Component {
    render(){
        return(
            <div className =" contaner-fluid  parallax">
                <div className = "container">
                    <div className = "row fixMargin">
                        <div className = "col-12">
                            <p className = "parralaxText"> VIEW SAMPLE PROJECTS BELOW</p>  
                            {/* please fix the parallax isuue later           */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Parallax;