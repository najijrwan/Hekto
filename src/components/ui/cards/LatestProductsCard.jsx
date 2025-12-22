

const LatestProductsCard = ({ product, index }) => {
    return (
        <li
            className="
                w-[360px] h-[306px]"
        >
            <div>
                <img src={product.image} alt="Chair" />
            </div>
            <div>
                {product.label}
                {product.discountPrice}
                {product.price}
            </div>
        </li>
    );
}

export default LatestProductsCard;