import React from 'react';
import { useState } from "react";
import LatestProductsCard from '@cards/LatestProductsCard';

const latestProducts = [
    {
        id: "newArrival",
        label: "New Arrival",
        products: [
            {
                label: "Comfort Handy Craft",
                discountPrice: 42,
                price: 65,
                image: "src/assets/images/image 15.png",
            },
            {
                label: "Comfort Handy Craft",
                discountPrice: 42,
                price: 65,
                image: "src/assets/images/image 1166.png",
            },
            {
                label: "Comfort Handy Craft",
                discountPrice: 42,
                price: 65,
                image: "src/assets/images/image 1168.png",
            },
            {
                label: "Comfort Handy Craft",
                discountPrice: 42,
                price: 65,
                image: "src/assets/images/image 23.png",
            },
            {
                label: "Comfort Handy Craft",
                discountPrice: 42,
                price: 65,
                image: "src/assets/images/image 32-1.png",
            },
            {
                label: "Comfort Handy Craft",
                discountPrice: 42,
                price: 65,
                image: "src/assets/images/image 3-1.png",
            },
        ],
    },
    {
        id: "bestSeller",
        label: "Best Seller",
        products: [
            {
                label: "Comfort Handy Craft",
                price: "42.00",
                discountPrice: "$65.00",
                image: "",
            },
        ],
    },
    {
        id: "featured",
        label: "Featured",
        products: [
            {
                label: "Comfort Handy Craft",
                price: "42.00",
                discountPrice: "$65.00",
                image: "",
            },
        ],
    },
    {
        id: "specialOffer",
        label: "Special Offer",
        products: [
            {
                label: "Comfort Handy Craft",
                price: "42.00",
                discountPrice: "$65.00",
                image: "",
            },
        ],
    },
];



const LatestProducts = ({ title }) => {

    const [activeCategory, setActiveCategory] = useState("newArrival");

    return (
        <section
            data-title={title}
            className='
                mt-[71px]
                flex flex-col items-center gap-[58px]'
        >

            <header className='flex flex-col items-start gap-[19px]'>
                <h1 className='caption-title text-text'>
                    {title}
                </h1>
                <ul
                    className="
                        flex gap-[58px] 
                        text-[18px] text-text leading-normal 
                        font-secondary font-normal">
                    {latestProducts.map((cat) => (
                        <li
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`
                                ${cat.id === activeCategory ? 'text-pink' : ''}
                                cursor-pointer
                                `}
                        >
                            {cat.label}
                        </li>
                    ))}
                </ul>
            </header>

            <main>
                <ul
                    className='
                        grid grid-cols-3 grid-row-2 gap-y-[120px] gap-x-[37px]'
                >
                    {latestProducts
                        .find(cat => cat.id === activeCategory)
                        .products
                        .map((product, index) => (
                            <LatestProductsCard
                                key={product.code ?? index}
                                product={product}
                                index={index}
                            />
                        ))}
                </ul>
            </main>

        </section>
    );
}

export default LatestProducts;