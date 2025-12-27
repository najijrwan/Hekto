import { formatPrice } from "@utils/formatPrice.js";
import ViewShopBtn from "@product/ViewShopBtn";

const TopCategoriesCard = ({ product }) => {
    return (
        <div
            className="
            relative
            w-[270px] h-[345px]
            flex flex-col justify-between items-center
            group"
        >
            <div
                className="
                relative
                size-[270px] rounded-full
                flex items-center justify-center
                bg-[#F6F7FB] shadow-2 z-20"
            >
                <img
                    src={product.image}
                    alt="Chair"
                    className="size-[160px]"
                />
                <ViewShopBtn
                    onClick={() => console.log('Shop now clicked!')}
                    className='
                    absolute right-1/2 translate-x-1/2 bottom-[21px]
                    opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out'
                >
                    View Shop
                </ViewShopBtn>
            </div>

            <div
                className="
                absolute top-[6px] right-[5px] 
                size-[270px] rounded-full 
                bg-[#9877E7] 
                opacity-0 group-hover:opacity-100 transition-opacity duration-350 ease-out z-10"
            >
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