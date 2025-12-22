

const LatestProductsCard = ({ product, index }) => {
    return (
        <li
            className="
                w-[360px] h-[306px]
                flex flex-col gap-[16px]"
        >
            <div
                className="
                    flex items-center justify-center
                    w-full h-[270px]"
            >
                <img
                    src={product.image}
                    alt="Chair"
                    className={``}
                />
            </div>
            <div
                className="
                    flex items-center gap-[10px]
                    leading-normal font-primary font-normal not-italic"
            >
                <p className="text-[16px] text-text">{product.label}</p>
                <p className="text-[14px] text-text ml-auto">{product.discountPrice}</p>
                <p className="text-[12px] text-red line-through mr-[17px]">{product.price}</p>
            </div>
        </li>
    );
}

export default LatestProductsCard;