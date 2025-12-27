import TopCategoriesCard from "@cards/TopCategoriesCard.jsx"

const topCategories = [
    {
        id: 0,
        image: "src/assets/images/image 1168.png",
        label: "Mini LCW Chair",
        price: 56,
    },
    {
        id: 1,
        image: "src/assets/images/image 1168.png",
        label: "Mini LCW Chair",
        price: 56,
    },
    {
        id: 2,
        image: "src/assets/images/image 1171.png",
        label: "Mini LCW Chair",
        price: 56,
    },
    {
        id: 3,
        image: "src/assets/images/image 20.png",
        label: "Mini LCW Chair",
        price: 56,
    },
]

const TopCategories = ({ title }) => {
    return (
        <section
            className="
            px-[23px] mb-[15px]
            flex flex-col items-start gap-[56px]">

            <header
                className="caption-title">
                {title}
            </header>

            <main
                className="
                flex flex-row gap-10"
            >
                {topCategories.map((product) => (
                    <TopCategoriesCard 
                        key={product.id}
                        product={product}
                    />
                ))}
            </main>
        </section>
    );

}

export default TopCategories;