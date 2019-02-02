import React from 'react';
import './home.css';

const HomeLayout = (props)=> {
    return (
        <div>
            {props.children}
        </div>
    );
}

export default HomeLayout;