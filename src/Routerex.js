import React from  'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Cardwrapper from './Cardwrapper.js'

function Home(){
    return (
        <div className='cards'>
            <Cardwrapper/>
        </div>
    )
}
function About(){
    return (<div>
        <h2>myself</h2>
        <p> i am vidya</p>
    </div>
    );
}
function Contact(){
    return (<div>
        <p>email=<a href="vidyasangalad28@gmail.com">vidyasangalad28@gmail.com</a></p>
    </div>
    );
}

function Routerex(){
    return (
        <Router>
            <nav>
                <Link to="/">Home</Link>|
                <Link to="/about">About</Link>|
                <Link to="/contact">Contact</Link>
            </nav>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </Router>
    );
}

export default Routerex;