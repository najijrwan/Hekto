// src/assets/components/ui/Button.jsx
import React from 'react';

const Button = ({
    children,
    variant = 'accent',
    className = '',
    ...props
}) => {

    const baseStyle = `
    py-[16px] px-[40px] mt-[15px] rounded-[2px]
    text-[17px] leading-none text-center font-primary font-normal tracking-wide
    transition duration-200
  `;

    const variants = {
        accent: 'bg-accent text-white hover:opacity-90',
        outline: 'border border-accent text-accent hover:bg-accent hover:text-white',
        dark: 'bg-gray-800 text-white hover:bg-gray-900',
    };

    return (
        <button
            className={`${baseStyle} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
