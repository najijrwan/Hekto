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
            className="flex flex-col items-start gap-[40px]">

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

            <div>

            </div>

        </section>
    );
}

export default TrendingProducts;