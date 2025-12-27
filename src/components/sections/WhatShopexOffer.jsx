
const offers = [
    {
        id: "freeDelivery",
        img: "src/assets/images/free-delivery.png",
        title: "Free Delivery",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
        id: "cashback",
        img: "src/assets/images/cashback.png",
        title: "Cashback",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
        id: "premiumQuality",
        img: "src/assets/images/premium-quality.png",
        title: "Premium Quality",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
    {
        id: "24-hours-support",
        img: "src/assets/images/24h-support.png",
        title: "24/7 Support",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.",
    },
];

const WhatShopexOffer = ({ title }) => {
    return (
        <section
            data-title={title}
            className="
                relative
                mt-[58px] mb-[130px]
                flex flex-col items-start gap-[60px]"
        >

            <header className="caption-title text-text">
                {title}
            </header>

            <main>
                <ul
                    className="
                        flex flex-row gap-[23px]"
                >
                    {offers.map((offer) => (
                        <li
                            key={offer.id}
                            className="
                                w-[270px] h-[320px] px-[26px]
                                flex flex-col items-center justify-center gap-[27px]
                                text-center"
                        >
                            <img
                                src={offer.img}
                                alt="Free Delivery"
                            />
                            <div>
                                <header className="list-titles mb-[20px]">
                                    {offer.title}
                                </header>
                                <p className="
                                    text-[#1A0B5B] opacity-30 text-paragraph/[26.5px] font-secondary font-bold ">
                                    {offer.text}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </main>
        </section>
    );
}

export default WhatShopexOffer;