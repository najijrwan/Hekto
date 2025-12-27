import Button from "@ui/Button.jsx";

const DiscountItem = ({ title }) => {
    return (
        <section
            className="
                w-[1240px] h-[665px] px-[12.5px]"
        >

            <header>
                {title}
            </header>

            <main>
                <ul>
                    <li>Wood Chair</li>
                    <li>Plastic Chair</li>
                    <li>Sofa Colletion</li>
                </ul>
                <div>
                    <h1>
                        20% Discount Of All Products
                    </h1>
                    <h2>
                        Eams Sofa Compact
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
                    </p>
                    <ul>

                    </ul>
                    <Button>
                        Shop Now
                    </Button>
                </div>

            </main>

        </section>
    );
}

export default DiscountItem;