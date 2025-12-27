import { formatPrice } from "@utils/formatPrice.js";

const TopCategoriesCard = ({ product }) => {
    return (
        <div
            className="
            w-[270px] h-[345px]
            flex flex-col justify-between items-center"
        >
            <div
                className="
                size-[270px] rounded-full
                flex items-center justify-center
                bg-[#F6F7FB] shadow-2"
            >
                <img
                    src={product.image}
                    alt="Chair"
                    className="size-[160px]"
                />
            </div>

            <div
                className="
                flex flex-col items-center gap-[13px] 
                leading-none font-primary font-normal not-italic
                text-text"
            >
                <p className="text-[20px]">{product.label}</p>
                <p className="text-[16px]">{formatPrice(product.price)}</p>
            </div>

        </div>
    );
}

export default TopCategoriesCard;