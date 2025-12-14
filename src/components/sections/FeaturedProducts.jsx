import React from 'react';

const featuredProducts = [
    {
        image: "src/assets/images/image 1167.png",
        label: 'Cantilever Chair',
        colors: "",
        code: 'Y523201',
        price: '$42.00',
    },
    {
        image: "",
        label: 'Cantilever Chair',
        colors: "",
        code: 'Y52320',
        price: '$42.00',
    },
    {
        image: "",
        label: 'Cantilever Chair',
        colors: "",
        code: 'Y52320',
        price: '$42.00',
    },
    {
        image: "",
        label: 'Cantilever Chair',
        colors: "",
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
                    w-[1168px] h-[361px] mb-[5px]
                    flex flex-row justify-between'
            >
                {featuredProducts.map((product, index) => (
                    <li
                        key={index}
                        className='
                            w-[270px] '
                    >
                        <div
                            className='
                                h-[236px] w-full
                                bg-[#F6F7FB]'
                        >
                            <img
                                src={product.image}
                                alt="chair"
                                className='
                                    mt-[39px] mb-[18px] mx-auto' 
                            />
                        </div>
                        <div>

                        </div>
                    </li>
                ))}
            </ul>

        </section>
    );
}

export default FeaturedProducts;