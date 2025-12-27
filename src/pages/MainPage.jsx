import React from "react";
import Promotion from '@/components/sections/Promotion.jsx';
import FeaturedProducts from '@/components/sections/FeaturedProducts.jsx';
import LatestProducts from "../components/sections/LatestProducts";
import WhatShopexOffer from "@sections/WhatShopexOffer.jsx";
import UniqueFeatureSofa from "@sections/UniqueFeatureSofa.jsx";
import TrendingProducts from "@sections/TrendingProducts.jsx";
import DiscountItem from "@sections/DiscountItem.jsx";
import TopCategories from "@sections/TopCategories.jsx";

const MainPage = () => {
    return (
        <main className='
            flex flex-col items-center'
        >

            <Promotion />
            <FeaturedProducts title = "Featured Products" />
            <LatestProducts title = "Latest Products" />
            <WhatShopexOffer title = "What Shopex Offer!" />
            <UniqueFeatureSofa title = "Unique Features Of latest & Trending Poducts" />
            <TrendingProducts title = "Trending Products" />
            <DiscountItem title = "Discount Item" />
            <TopCategories title = "Top Categories" />
            
        </main>
    );
};

export default MainPage;
