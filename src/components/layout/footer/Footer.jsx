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
                    flex items-center justify-center gap-[660px]
                    bg-[#E7E4F8]">

                <p className='
                    text-[16px]/normal font-secondary font-semibold 
                    text-[#9DA0AE] '
                >
                    ©Webecy - All Rights Reserved</p>

                <SocialLinks links={company.social} size={13} />

            </section>
        </footer>
    );
}

export default Footer;