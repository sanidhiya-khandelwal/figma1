import React from 'react'
import Logo from '../../public/Logo.png'
import personIcon from '../assets/icons/personIcon.svg'
import searchIcon from '../assets/icons/searchIcon.svg'
import cartIcon from '../assets/icons/cartIcon.svg'
import heartIcon from '../assets/icons/heartIcon.svg'
import './Navigation.css'
const Navigation = () => {
    return (
        <nav className="navigation">
            <div className="navigation_container">
                <div className="navigation_logo">
                    <img src={Logo} alt="" />
                </div>
                <div className="navigation_links">
                    <a href="/">Home</a>
                    <a href="/">Shop</a>
                    <a href="/">About</a>
                    <a href="/">Blog</a>
                    <a href="/">Contact</a>
                    <a href="/">Pages</a>
                </div>
                <div className="navigation_options">
                    <div className="navigation_option_items">
                        <img src={personIcon} alt="" /> &nbsp;
                        <a href="/">Login / Register</a>
                    </div>
                    <div className="navigation_option_items">
                        <img src={searchIcon} alt="" />
                    </div>
                    <div className="navigation_option_items">
                        <img src={cartIcon} alt="" /> 1
                    </div>
                    <div className="navigation_option_items">
                        <img src={heartIcon} alt="" /> 1
                    </div>

                </div>

            </div>

        </nav>
    )
}

export default Navigation