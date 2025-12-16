import React from 'react';

import FeaturedProductCard from '@cards/FeaturedProductCard.jsx';

const featuredProducts = [
    {
        images: ["src/assets/images/image 1167.png", "src/assets/images/image 1.png"],
        label: 'Cantilever chair',
        colors: ['#05E6B7', '#F701A8', '#00009D'],
        code: 'Y523201',
        price: '$42.00',
    },
    {
        images: ["src/assets/images/image 1168.png", "src/assets/images/image 1.png"],
        label: 'Cantilever chair',
        colors: ['#05E6B7', '#F701A8', '#00009D'],
        code: 'Y52320',
        price: '$42.00',
    },
    {
        images: ["src/assets/images/image 1169.png", "src/assets/images/image 1.png"],
        label: 'Cantilever chair',
        colors: ['#05E6B7', '#F701A8', '#00009D'],
        code: 'Y52320',
        price: '$42.00',
    },
    {
        images: ["src/assets/images/image 3.png", "src/assets/images/image 1.png"],
        label: 'Cantilever chair',
        colors: ['#05E6B7', '#F701A8', '#00009D'],
        code: 'Y52320',
        price: '$42.00',
    },
];

const FeaturedProducts = ({ title }) => {
    return (
        <section
            className='
                mt-[290px] 
                flex flex-col gap-[48px]'
        >

            <h1
                className='
                    text-[#1A0B5B]
                    caption-title '
            >
                {title}
            </h1>

            <ul
                className='
                    w-[1168px] h-[361px]
                    flex flex-row justify-between'
            >
                {featuredProducts.map((product, index) => (
                    <FeaturedProductCard
                        key={product.code ?? index}
                        product={product}
                        index={index}
                    />
                ))}
            </ul>

            <ul
                className='
                    mx-auto
                    flex gap-1.75'
            >
                <li
                    className='
                        w-6 h-1 rounded-[10px]
                        bg-pink'
                >
                </li>
                <li
                    className='
                        w-4 h-1 rounded-[10px]
                        bg-[#FEBAD7]'
                >
                </li>
                <li
                    className='
                        w-4 h-1 rounded-[10px]
                        bg-[#FEBAD7]'
                >
                </li>
                <li
                    className='
                        w-4 h-1 rounded-[10px]
                        bg-[#FEBAD7]'
                >
                </li>
            </ul>

        </section>
    );
}

export default FeaturedProducts;