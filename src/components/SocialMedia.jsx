import React from 'react'
import './SocialMedia.css'
import logo from '../../public/Logo.png'
import fbIcon from '../assets/icons/fbIcon.svg'
import instagramIcon from '../assets/icons/instagramIcon.svg'
import twitterIcon from '../assets/icons/twitterIcon.svg'
const SocialMedia = () => {
    return (
        <section className='socialmedia'>
            <div className="companylogo">
                <img src={logo} alt="" />
            </div>
            <div className="socialmediaicons">
                <img src={fbIcon} alt="" />
                <img src={instagramIcon} alt="" />
                <img src={twitterIcon} alt="" />
            </div>

        </section>
    )
}

export default SocialMedia