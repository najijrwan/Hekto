

const WhatShopexOffer = ({ title }) => {
    return (
        <section
            className="
                relative
                flex flex-col items-start gap-[60px]">

            <header className="caption-title text-text">
                {title}
            </header>

            <main>
                <ul
                    className="
                        flex flex-row gap-[23px]"
                >
                    <li
                        className="
                            w-[270px] h-[320px] py-[45px] px-[27px]
                            flex flex-col items-center justify-center">
                        <h1>24/7 Support</h1>
                        <p
                            className="
                                w-[217px] h-[85px]
                                text-paragraph/[26.5] text-center font-primary font-bold
                                text-[#1A0B5B] opacity-30"
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.
                        </p>
                    </li>
                </ul>
            </main>
        </section>
    );
}

export default WhatShopexOffer;