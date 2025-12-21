import React from 'react';
import { company } from '@data/company.js';
import SocialLinks from "@footer/SocialLinks.jsx";

const lists = [
    {
        title: "Catagories",
        items: [
            "Laptops & Computers",
            "Cameras & Photography",
            "Smart Phones & Tablets",
            "Video Games & Consoles",
            "Waterproof Headphones",
        ]
    },
    {
        title: "Customer Care",
        items: [
            "My Account",
            "Discount",
            "Returns",
            "Orders History",
            "Order Tracking",
        ]
    },
    {
        title: "Pages",
        items: [
            "Blog",
            "Browse the Shop",
            "Category",
            "Pre-Built Pages",
            "Visual Composer Elements",
            "WooCommerce Pages",
        ]
    },
]

const Footer = () => {

    return (
        <footer
            className="
                w-full"
        >

            <section
                className="
                    w-full h-[480px] py-[94px]
                    flex items-start justify-center gap-[70px]
                    bg-bg-shade">

                <div
                    className='
                        flex flex-col items-start justify-center gap-[20px]'
                >

                    <header
                        className='
                            font-primary font-bold text-[34px] leading-[34px]'
                    >
                        Hekto
                    </header>
                    <div
                        className='
                            relative
                            w-[377px] h-[44px] rounded-[3px]
                            bg-white '
                    >
                        <input
                            type="text"
                            placeholder='Enter Email Address'
                            className='
                                w-full h-full pl-[20px] 
                                opacity-45
                                placeholder:text-sub-text placeholder:text-paragraph placeholder:font-secondary
                                placeholder:font-normal placeholder:not-italic placeholder:leading-normal
                                outline-0'
                        />
                        <button
                            className='
                                absolute right-0
                                w-[135px] h-[40px] my-[2px] rounded-[3px]
                                text-button text-center font-primary font-medium leading-normal
                                bg-accent text-bg-shade'
                        >
                            Sign Up
                        </button>
                    </div>

                    <a href="#" className='paragraph'>Contact Info</a>
                    <a href="#" className='paragraph'>17 Princess Road, London, Greater London NW1 8JR, UK</a>

                </div>

                {lists.map((list, i) => (
                    <div
                        key={i}
                        className='
                        flex flex-col items-start justify-start'
                    >

                        <header className='list-titles mb-[42px] text-black'>
                            {list.title}
                        </header>
                        <ul className='paragraph flex flex-col gap-[20px]'>
                            {list.items.map((item, idx) => (
                                <li key={idx}>
                                    {item}
                                </li>
                            ))}
                        </ul>

                    </div>
                ))}
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