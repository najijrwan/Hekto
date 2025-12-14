import React from 'react';
import { CardCart, CardHeart, CardSearchPlus } from '../../assets/icons';
const featuredProducts = [
    {
        image: "src/assets/images/image 1167.png",
        label: 'Cantilever chair',
        colors: ['#05E6B7', '#F701A8', '#00009D'],
        code: 'Y523201',
        price: '$42.00',
    },
    {
        image: "src/assets/images/image 1168.png",
        label: 'Cantilever chair',
        colors: ['#05E6B7', '#F701A8', '#00009D'],
        code: 'Y52320',
        price: '$42.00',
    },
    {
        image: "src/assets/images/image 1169.png",
        label: 'Cantilever chair',
        colors: ['#05E6B7', '#F701A8', '#00009D'],
        code: 'Y52320',
        price: '$42.00',
    },
    {
        image: "src/assets/images/image 3.png",
        label: 'Cantilever chair',
        colors: ['#05E6B7', '#F701A8', '#00009D'],
        code: 'Y52320',
        price: '$42.00',
    },
];

const FeaturedProducts = () => {
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
                Featured Products
            </h1>

            <ul
                className='
                    w-[1168px] h-[361px]
                    flex flex-row justify-between'
            >
                {featuredProducts.map((product, index) => (
                    <li
                        key={index}
                        className='
                            relative
                            w-[270px] h-full
                            flex flex-col items-center
                            bg-white shadow-1
                            cursor-pointer group'
                    >

                        <div 
                            className='
                                absolute top-[11px] left-[11px]
                                hidden flex-row justify-center items-center gap-[16px]
                                group-hover:flex'
                        >
                            <CardCart />
                            <CardHeart />
                            <CardSearchPlus />
                        </div>

                        <div
                            className='
                                w-full h-[236px]
                                flex items-end
                                bg-[#F6F7FB]'
                        >
                            <img
                                src={product.image}
                                alt="chair"
                                className='
                                    mt-[40px] mb-[20px] mx-auto'
                            />
                        </div>

                        <div
                            className='
                                w-full py-[16px]
                                flex flex-col items-center justify-center gap-[12px] leading-tight
                                group-hover:bg-section-hover'
                        >
                            <h1
                                className='
                                    text-[18px] font-secondary font-[600]
                                    text-pink'
                            >
                                {product.label}
                            </h1>

                            <div className="flex gap-[6px] ">
                                {product.colors.map((color, i) => (
                                    <span
                                        key={i}
                                        className="w-[14px] h-[4px] rounded-[10px]"
                                        style={{ backgroundColor: color }}
                                    />
                                ))}
                            </div>

                            <p
                                className='
                                text-[14px] font-primary font-normal not-italic
                                text-text'
                            >
                                Code - {product.code}
                            </p>

                            <p
                                className='
                                text-[14px] font-secondary font-normal
                                text-text'
                            >
                                {product.price}
                            </p>
                        </div>

                    </li>
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