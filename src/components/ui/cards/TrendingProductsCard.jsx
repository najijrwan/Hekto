
const TrendingProductsCard = ({ product }) => {
    return (
        <div
            className="
                w-[270px] h-[350px]"
        >

            <div
                className="
                size-[246px] bg-[#F5F6F8]
                flex items-center justify-center"
            >
                <img
                    src={product.image}
                    alt="chair"
                />
            </div>

            <div
                className="
                    flex flex-col justify-center gap-[8px]"
            >
                <p
                    className="
                        text-[16px]/[25.6] text-text font-secondary font-bold"
                >
                    {product.label}
                </p>
                <p
                    className="
                        caption"
                >
                    {product.discountPrice}
                    <span
                        className="
                            inline price-cut text-[#151875] opacity-30">
                        {product.price}
                    </span>
                </p>
            </div>
        </div>
    );
}

export default TrendingProductsCard;