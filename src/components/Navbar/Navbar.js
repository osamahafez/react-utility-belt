import React from 'react';
import fannyPack from '../../assets/images/Logo/yellowFannyPack.png';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-lightYellow">
            <NavLink to='/' className="navbar-brand">
                <img src={fannyPack} className="d-inline-block align-center brand-logo" alt="fanny pack" />
                <span className='brand-name'>Fanny Pack</span>
            </NavLink>
    
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse links-custom" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink to='/weather' className="nav-link" activeClassName="nav-activated"><span className='nav-text'>Weather</span></NavLink>                    
                    </li>
                    <li className="nav-item">
                        <NavLink to='/worldClock' className="nav-link" activeClassName="nav-activated"><span className='nav-text'>World Clock</span></NavLink>                    
                    </li>
                    <li className="nav-item">
                        <NavLink to='/calculator' className="nav-link" activeClassName="nav-activated"><span className='nav-text'>Calculator</span></NavLink>                    
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;