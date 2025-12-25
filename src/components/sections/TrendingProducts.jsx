import TrendingProductsCard from "@cards/TrendingProductsCard.jsx";
const trendingProducts = [
    {
        id: 0,
        label: "Cantilever chair",
        image: "src/assets/images/image 1171.png",
        discountPrice: 26,
        price: 42,
    },
    {
        id: 1,
        label: "Cantilever chair",
        image: "src/assets/images/image 1170.png",
        discountPrice: 26,
        price: 42,
    },
    {
        id: 2,
        label: "Cantilever chair",
        image: "src/assets/images/image 31.png",
        discountPrice: 26,
        price: 42,
    },
    {
        id: 3,
        label: "Cantilever chair",
        image: "src/assets/images/image 32-1.png",
        discountPrice: 26,
        price: 42,
    },
]


const TrendingProducts = ({ title }) => {
    return (
        <section
            className="flex flex-col items-start gap-[40px] mb-[126px]">

            <header
                className="caption-title"
            >
                {title}
            </header>

            <div
                className="
                    flex gap-[30px]">
                {trendingProducts.map((product) => (
                    <TrendingProductsCard
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>

            <div
                className="
                    h-[270px]
                    flex flex-row gap-[24px]"
            >
                <div
                    className="
                    relative
                    w-[420px] h-full
                    flex flex-row gap-[29px]
                    bg-[#FFF6FB] shadow-2">
                    <header
                        className="flex flex-col items-start mt-[34px] ml-[25px]">
                        <p
                            className="
                                    text-text text-[26px] leading-none font-primary font-semibold not-italic"
                        >
                            23% off in all products
                        </p>
                        <button
                            className="
                                mt-[11px]
                                text-accent text-[16px] leading-none font-secondary font-semibold">
                            Shop Now
                        </button>
                    </header>
                    <img
                        src="src/assets/images/image 1162.png"
                        alt="Clock"
                        className="absolute right-0 bottom-0" />
                </div>
                <div
                    className="
                    relative
                    w-[420px] h-full
                    flex flex-row gap-[29px]
                    bg-bg-shade shadow-2">
                    <header
                        className="flex flex-col items-start mt-[34px] ml-[25px]">
                        <p
                            className="
                                    text-text text-[26px] leading-none font-primary font-semibold not-italic"
                        >
                            23% off in all products
                        </p>
                        <button
                            className="
                                mt-[11px]
                                text-accent text-[16px] leading-none font-secondary font-semibold">
                            View Collection
                        </button>
                    </header>
                    <img
                        src="src/assets/images/image 1161.png"
                        alt="Clock"
                        className="absolute right-0 bottom-0" />
                </div>
                <div
                    className="
                        flex flex-col gap-[20px]">
                    <ul>

                    </ul>
                </div>
            </div>

        </section>
    );
}

export default TrendingProducts;