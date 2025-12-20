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
                w-full h-[532px]"
        >

            <section
                className="
                    w-full h-full py-[94px]
                    flex items-start justify-center gap-[70px]
                    bg-bg-shade">

                <div
                    className='
                        flex flex-col items-center justify-center gap-[20px]'
                >

                    <header
                        className='
                            font-primary font-bold text-[34px] leading-[34px]'
                    >
                        Hekto
                    </header>
                    <div 
                        className='
                            w-p'>

                    </div>
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