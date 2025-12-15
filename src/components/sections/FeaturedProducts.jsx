import React from 'react';
import Icon from '@/components/Icon.jsx'

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
                                hidden flex-row justify-center items-center
                                group-hover:flex'
                        >

                            {["ShoppingCart", "Heart", "Search"].map((iconName, i) => (
                                <button
                                    key={i}
                                    className="size-[30px] rounded-full hover:bg-bg-shade cursor-pointer group/button"
                                >
                                    <Icon
                                        name={iconName}
                                        size={18}
                                        gradient={{ from: "#1389FF", to: "#1DB4E7" }}
                                        className="m-auto flex group-hover/button:stroke-current group-hover/button:text-blue transition-colors"
                                        uniqueId={`${index}-${i}`} // ensures gradient IDs are unique per card+icon
                                    />
                                </button>
                            ))}


                        </div>

                        <div
                            className='
                                w-full h-[236px]
                                flex items-end
                                bg-[#F6F7FB] group-hover:bg-[#F7F7F7]'
                        >
                            <img
                                src={product.images[0]}
                                alt="chair"
                                className='
                                    mt-[40px] mb-[20px] mx-auto
                                    block group-hover:hidden'
                            />
                            <img
                                src={product.images[1]}
                                alt="chair"
                                className='
                                    mt-[40px] mb-[20px] mx-auto
                                    hidden group-hover:block'
                            />
                        </div>

                        <div
                            className='
                                w-full h-[125px] py-[16px]
                                flex flex-col items-center justify-center gap-[12px]
                                group-hover:bg-section-hover'
                        >
                            <h1
                                className='
                                    text-[18px] leading-[22px] font-secondary font-[600]
                                    text-pink group-hover:text-white'
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
                                text-[14px] leading-none font-primary font-normal not-italic
                                text-text group-hover:text-white'
                            >
                                Code - {product.code}
                            </p>

                            <p
                                className='
                                text-[14px] leading-[17px] font-secondary font-normal
                                text-text group-hover:text-white'
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