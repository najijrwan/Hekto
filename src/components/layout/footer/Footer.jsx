import React from 'react';
import { company } from '@data/company.js';
import SocialLinks from "@footer/SocialLinks.jsx";


const Footer = () => {

    return (
        <footer
            className="
                w-full h-[532px]"
        >

            <section
                className="
                    w-full h-full
                    bg-bg-shade">
                test
            </section>

            <section
                className="
                    w-full h-[53px]
                    bg-[#E7E4F8]">

                <p>©Webecy - All Rights Reserved</p>

                <SocialLinks links={company.social} />

            </section>
        </footer>
    );
}

export default Footer;