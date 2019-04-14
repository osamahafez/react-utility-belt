import React from 'react';
import Navbar from './../Navbar/Navbar';

const layout = (props) => {
    return (
        <div>
            <Navbar />
            <div>{props.children}</div>
        </div>
    );
};

export default layout;