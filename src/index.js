import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Navbar';
import LandingPage from './LandingPage';
import Services from './Services';
import Parallax from './Parallax';
import Projects from './Projects';
import Hireme from './Hireme';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
     <div>
        <Navbar />
        <LandingPage />
        <Services />
        <Parallax />
        <Projects />
        <Hireme/>
    </div>
    , document.getElementById('root'));
registerServiceWorker();
