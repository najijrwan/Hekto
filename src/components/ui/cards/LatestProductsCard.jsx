

const LatestProductsCard = ({ product, index }) => {
    return (
        <li
            className="
                w-[360px] h-[306px]"
        >
            <div className=" w-full h-[280px] ">
                <img
                    src={product.image}
                    alt="Chair"
                    className={`${index === 2 ? 'w-full h-[250px] object-contain' : ''} `}
                />
            </div>
            <div
                className="
                    flex items-center gap-[10px]
                    leading-normal font-primary font-normal not-italic"
            >
                <p className="text-[16px] text-text">{product.label}</p>
                <p className="text-[14px] text-text ml-auto">{product.discountPrice}</p>
                <p className="text-[12px] text-red line-through">{product.price}</p>
            </div>
        </li>
    );
}

export default LatestProductsCard;