import Icon from '../../Icon.jsx';
import { PRODUCT_ACTION_ICONS } from '@/components/ui/cards/constants.js';
const ProductActions = ({ productIndex }) => {
    return (
        <div
            className="
        absolute top-[11px] left-[11px] -translate-y-1/2 group-hover:translate-y-0 z-20
        flex flex-row justify-center items-center
        opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
            {PRODUCT_ACTION_ICONS.map((iconName, i) => (
                <button
                    key={i}
                    className="
            size-[30px] rounded-full 
            hover:bg-bg-shade
            cursor-pointer group/button"
                >
                    <Icon
                        name={iconName}
                        size={18}
                        gradient={{ from: "#1389FF", to: "#1DB4E7" }}
                        className="m-auto flex"
                        uniqueId={`${productIndex}-${i}`}
                    />
                </button>
            ))}
        </div>
    );
};

export default ProductActions;