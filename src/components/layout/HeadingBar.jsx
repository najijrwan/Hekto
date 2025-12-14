import React from "react";
import { Email, Phone, ChevronDown, User, Heart, Cart } from '@/assets/icons';

const contactItems = [
    { icon: <Email />, content: <a href="mailto:mhhasanul@gmail.com"><p>mhhasanul@gmail.com</p></a> },
    { icon: <Phone />, content: <a href="tel:(12345)67890">(12345)67890</a> }
];

const actionItems = [
    { label: "Login", icon: <User className="mb-1" /> },
    { label: "Wishlist", icon: <Heart className="mb-1" /> },
    { label: "Cart", icon: <Cart className="mb-1" /> }
];

const HeadingBar = () => {
    return (
        <header className="
            flex items-center justify-between
            w-full h-11 px-[378.33px]
            bg-purple text-text-white font-primary text-button font-normal not-italic
        ">

            <div className="flex items-center gap-12">
                {contactItems.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                        {item.icon}
                        {item.content}
                    </div>
                ))}
            </div>

            <ul className="flex items-center gap-4.25">
                <button className="flex items-center gap-px">
                    <span>English</span>
                    <ChevronDown />
                </button>

                <button className="flex items-center gap-px">
                    <span>USD</span>
                    <ChevronDown />
                </button>

                {actionItems.map((item, idx) => (
                    <li key={idx}>
                        <button className="flex items-center gap-1">
                            <span>{item.label}</span>
                            {item.icon}
                        </button>
                    </li>
                ))}
            </ul>

        </header>
    );
};

export default HeadingBar;
