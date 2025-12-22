

const LatestProductsCard = ({ product, index}) => {
    return(
        <li 
            className="
                "
        >
            {product.label}
            <img src={product.image} alt="" />
        </li>
    );
}

export default LatestProductsCard;