import React from 'react';

const featuredProducts = [
    {
        image: "src/assets/images/image 1167.png",
        label: 'Cantilever Chair',
        colors: ['#05E6B7', '#F701A8', '#00009D'],
        code: 'Y523201',
        price: '$42.00',
    },
    {
        image: "src/assets/images/image 1168.png",
        label: 'Cantilever Chair',
        colors: ['#05E6B7', '#F701A8', '#00009D'],
        code: 'Y52320',
        price: '$42.00',
    },
    {
        image: "src/assets/images/image 1169.png",
        label: 'Cantilever Chair',
        colors: ['#05E6B7', '#F701A8', '#00009D'],
        code: 'Y52320',
        price: '$42.00',
    },
    {
        image: "src/assets/images/image 3.png",
        label: 'Cantilever Chair',
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
                            w-[270px]
                            flex flex-col items-center gap-[15px]
                            bg-white shadow-1'
                    >

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
                            flex flex-col items-center justify-center gap-[12px] leading-none'
                        >
                            <h1
                                className='
                                text-[18px] font-secondary font-bold
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