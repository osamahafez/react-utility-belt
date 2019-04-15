import React from 'react';
import './Home.css';

const home = () => {

    return(
        <div className="jumbotron jumbotron-fluid jumbotron-custom">
            <div className="container">
                <h1 className="display-3">Welcome to my <span className='jumbotron-brand-name'>Fanny Pack</span> Project</h1>
                <p className="lead">
                    This is a react project that provide some tools and widgets (e.g. calculator).
                </p>
            </div>
        </div>
    );
}

export default home;