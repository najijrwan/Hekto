import React from 'react';

const featuredProducts = [
    {
        images: {
            primary: '/images/product-1-main.png',
            secondary: '/images/product-1-alt.png',
            hover: '/images/product-1-hover.png',
        },
        label: 'Cantilever Chair',
        code: 'Y523201',
        price: '$42.00',
    },
    {
        images: {
            primary: '/images/product-2-main.png',
            secondary: '/images/product-2-alt.png',
            hover: '/images/product-2-hover.png',
        },
        label: 'Cantilever Chair',
        code: 'Y52320',
        price: '$42.00',
    },
    {
        images: {
            primary: '/images/product-3-main.png',
            secondary: '/images/product-3-alt.png',
            hover: '/images/product-3-hover.png',
        },
        label: 'Cantilever Chair',
        code: 'Y52320',
        price: '$42.00',
    },
    {
        images: {
            primary: '/images/product-4-main.png',
            secondary: '/images/product-4-alt.png',
            hover: '/images/product-4-hover.png',
        },
        label: 'Cantilever Chair',
        code: 'Y52320',
        price: '$42.00',
    },
];

const FeaturedProducts = () => {
    return (
        <section
            className='
                mt-[290px] mb-[71px]
                flex flex-col gap-[48px]'
        >

            <h1
                className='
                    text-[#1A0B5B]
                    caption-title '
            >
                Featured Products
            </h1>

            <ul
                className='
                    w-[1168px]
                    flex flex-row justify-between'
            >
                {featuredProducts.map((product, index) => (
                    <li key={index}>
                        {/* product rendering goes here */}
                    </li>
                ))}
            </ul>

        </section>
    );
}

export default FeaturedProducts;