import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = (props) => {
    return (
        <nav className="main-nav">
            <ul>
<<<<<<< Updated upstream
<<<<<<< Updated upstream
                <li><NavLink to='cats' onClick={() => {props.fetchData('cats')}}>Cats</NavLink></li>
                <li><NavLink to='dogs' onClick={() => {props.fetchData('dogs')}}>Dogs</NavLink></li>
                <li><NavLink to='computers' onClick={() => {props.fetchData('computers')}}>Computers</NavLink></li>
=======
                <li><NavLink to='/cats' onClick={() => {props.search('cats')}}>Cats</NavLink></li>
                <li><NavLink to='/dogs' onClick={() => {props.search('dogs')}}>Dogs</NavLink></li>
                <li><NavLink to='/computers' onClick={() => {props.search('computers')}}>Computers</NavLink></li>
>>>>>>> Stashed changes
=======
                <li><NavLink to='/cats' onClick={() => {props.search('cats')}}>Cats</NavLink></li>
                <li><NavLink to='/dogs' onClick={() => {props.search('dogs')}}>Dogs</NavLink></li>
                <li><NavLink to='/computers' onClick={() => {props.search('computers')}}>Computers</NavLink></li>
>>>>>>> Stashed changes
            </ul>
        </nav>
    );

}

export default Nav;