import React from 'react';
import fannyPack from '../../assets/images/Logo/yellowFannyPack.png';
import './Navbar.css';

const Navbar = () => {

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-lightYellow">
            <a className="navbar-brand" href="#"> {/* fix it using <NavLink> */}
                <img src={fannyPack} className="d-inline-block align-center brand-logo" alt="fanny pack" />
                <span className='brand-name'>Fanny Pack</span>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse links-custom" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#"><span className='nav-text'>Weather</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><span className='nav-text'>World Clock</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#"><span className='nav-text'>Calculator</span></a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;