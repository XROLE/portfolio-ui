import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
     <div>
        <Navbar />
        <LandingPage />
    </div>
    , document.getElementById('root'));
registerServiceWorker();
