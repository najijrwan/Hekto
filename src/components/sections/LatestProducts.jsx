import React from 'react';
import { useState } from "react";

const latestProducts = {
    newArrival: [
        {
            label: "Comfort Handy Craft",
            price: "42.00",
            discountPrice: "$65.00",
            image: "",
        },
        {
            label: "Comfort Handy Craft",
            price: "42.00",
            discountPrice: "$65.00",
            image: "",
        },
        {
            label: "Comfort Handy Craft",
            price: "42.00",
            discountPrice: "$65.00",
            image: "",
        },
        {
            label: "Comfort Handy Craft",
            price: "42.00",
            discountPrice: "$65.00",
            image: "",
        },
        {
            label: "Comfort Handy Craft",
            price: "42.00",
            discountPrice: "$65.00",
            image: "",
        },
        {
            label: "Comfort Handy Craft",
            price: "42.00",
            discountPrice: "$65.00",
            image: "",
        },
    ],
    bestSeller: [
        {
            label: "Comfort Handy Craft",
            price: "42.00",
            discountPrice: "$65.00",
            image: "",
        },
    ],
    featured: [
        {
            label: "Comfort Handy Craft",
            price: "42.00",
            discountPrice: "$65.00",
            image: "",
        },
    ],
    specialOffer: [
        {
            label: "Comfort Handy Craft",
            price: "42.00",
            discountPrice: "$65.00",
            image: "",
        },
    ],
};


const LatestProducts = ({ title }) => {

    const [activeCategory, setActiveCategory] = useState("newArrival");

    return (
        <section
            className='
                flex flex-col items-center'
        >

            <header className='flex flex-col items-start gap-[19px]'>
                <h1 className='caption-title text-text'>
                    {title}
                </h1>
                <ul className="flex gap-6">
                    {Object.keys(latestProducts).map((name) => (
                        <li
                            key={name}
                            onClick={() => setActiveCategory(name)}
                            className={`cursor-pointer ${activeCategory === name ? "text-primary" : "text-muted"
                                }`}
                        >
                            {name.replace(/([A-Z])/g, " $1")}
                        </li>
                    ))}
                </ul>
            </header>

            <main>
                <ul>
                    {latestProducts[activeCategory].map((product, i) => (
                        <li key={i}>
                            {product.label}
                        </li>
                    ))}
                </ul>
            </main>

        </section>
    );
}

export default LatestProducts;