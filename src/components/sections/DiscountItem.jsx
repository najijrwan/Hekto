import Icon from "@components/Icon.jsx"
import Button from "@ui/Button.jsx";

const features = [
    "Material expose like metals",
    "Clear lines and geometric figures",
    "Simple neutral colours.",
    "Material expose like metals",
];


const DiscountItem = ({ title }) => {
    return (
        <section
            className="
                w-[1240px] h-[665px] px-[12.5px] mb-[80px]
                flex flex-col items-start gap-[33px]"
        >

            <header className="caption-title">
                {title}
            </header>

            <main
                className="relative w-full"
            >
                <img
                    src="src/assets/images/Group 154.png"
                    alt="Sofa"
                    className="absolute right-0" />
                <ul
                    className="
                        w-100 mx-auto 
                        flex justify-center items-center gap-[30px]
                        text-text text-[18px] leading-none font-secondary font-normal">
                    <li>Wood Chair</li>
                    <li>Plastic Chair</li>
                    <li>Sofa Colletion</li>
                </ul>
                <div className="mt-[111px] max-w-fit">
                    <h1 className="
                        mb-[16px]
                        text-text text-[35px] leading-[1.32] tracking-[0.015em] font-primary font-bold not-italic">
                        20% Discount Of All Products
                    </h1>
                    <h2 className="
                        mb-[20px]
                        text-pink text-[21px] leading-[1.32] tracking-[0.015em] font-primary font-normal not-italic">
                        Eams Sofa Compact
                    </h2>
                    <p
                        className="
                            w-[523px] mb-[28px] align-center
                            text-[#B7BACB] text-[17px] leading-[30px] tracking-[0.02em] font-secondary font-normal"
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.
                    </p>
                    <ul className="
                        grid grid-cols-2 gap-y-[10px]
                        text-[#B8B8DC] text-[16px] leading-[30px] tracking-[0.02em] font-secondary font-normal"
                    >
                        {features.map((item, index) => (
                            <li
                                key={index}
                                className="
                                w-fit 
                                flex items-center gap-[3px]"
                            >
                                <Icon
                                    name="Check"
                                    className="text-[#7569B2] size-fit"
                                />
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>

                    <Button className="mt-[37px]">
                        Shop Now
                    </Button>
                </div>

            </main>

        </section>
    );
}

export default DiscountItem;