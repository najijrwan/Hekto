import React from "react";
import Promotion from '@/components/sections/Promotion.jsx';
import FeaturedProducts from '@/components/sections/FeaturedProducts.jsx';



const MainPage = () => {
    return (
        <main className='
            flex flex-col items-center'
        >

            <Promotion />
            <FeaturedProducts title = "Featured Products" />

        </main>
    );
};

export default MainPage;
