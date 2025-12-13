import React from "react";
import Promotion from '@/components/sections/Promotion.jsx';
import FeaturedProducts from '@/components/sections/FeaturedProducts.jsx';


const MainPage = () => {
    return (
        <main className='
            flex flex-col justify-center'
        >

            <Promotion />
            <FeaturedProducts />

        </main>
    );
};

export default MainPage;
