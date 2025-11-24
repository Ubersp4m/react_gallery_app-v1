import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = (props) => {
    return (
        <nav className="main-nav">
            <ul>
                <li><NavLink to='cats' onClick={() => {props.fetchData('cats')}}>Cats</NavLink></li>
                <li><NavLink to='dogs' onClick={() => {props.fetchData('dogs')}}>Dogs</NavLink></li>
                <li><NavLink to='computers' onClick={() => {props.fetchData('computers')}}>Computers</NavLink></li>
            </ul>
        </nav>
    );

}

export default Nav;