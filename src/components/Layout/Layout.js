import React from 'react';

const layout = (props) => {
    return (
        <div>
            <div>NAVBAR</div>
            <div>{props.children}</div>
        </div>
    );
};

export default layout;