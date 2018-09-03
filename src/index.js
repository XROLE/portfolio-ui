import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import Services from './Services';
import Parallax from './Parallax';
import Projects from './Projects';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
     <div>
        <Navbar />
        <LandingPage />
        <Services />
        <Parallax />
        <Projects />
    </div>
    , document.getElementById('root'));
registerServiceWorker();
