import React from "react";
import Icon from '@/components/Icon.jsx'
import ProductActions from '@/components/ui/product/ProductActions';

const FeaturedProductCard = ({ product, index }) => {
    return (
        <li
            className="
                relative
                w-[270px] h-full
                flex flex-col items-center
                bg-white shadow-1
                cursor-pointer group "
        >
            {/* Product Buttons */}
            <ProductActions productIndex={index} />

            {/* Image */}
            <div
                className="
                relative
                    w-full h-[236px] 
                    flex items-end 
                    bg-[#F6F7FB] group-hover:bg-[#F7F7F7] "
            >

                <img
                    src={product.images[0]}
                    alt={product.label}
                    className="
                         absolute bottom-5 left-1/2 -translate-x-1/2 scale-100 group-hover:scale-110
                         opacity-100 group-hover:opacity-0 transition-all duration-300 ease-in"
                />
                <img
                    src={product.images[1]}
                    alt={product.label}
                    className="
                         absolute bottom-5 left-1/2 -translate-x-1/2 scale-110 group-hover:scale-100
                         opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in"
                />

            </div>

            {/* Meta */}
            <div
                className="
                    w-full h-[125px] py-[16px]
                    flex flex-col items-center justify-center gap-[12px]
                    group-hover:bg-section-hover 
                    transtion-all duration-300 ease-in"
            >

                <h1
                    className="
                        text-[18px] leading-[22px] font-secondary font-[600]
                        text-pink group-hover:text-white "
                >
                    {product.label}
                </h1>

                <div className="flex gap-[6px]">
                    {product.colors.map((color, i) => (
                        <span
                            key={i}
                            className="w-[14px] h-[4px] rounded-[10px]"
                            style={{ backgroundColor: color }}
                        />
                    ))}
                </div>

                <p
                    className="
                        text-[14px] leading-none 
                        text-text group-hover:text-white"
                >
                    Code – {product.code}
                </p>

                <p
                    className="
                        text-[14px] leading-[17px] 
                        text-text group-hover:text-white">
                    {product.price}
                </p>

            </div>

        </li>
    );
};

export default FeaturedProductCard;