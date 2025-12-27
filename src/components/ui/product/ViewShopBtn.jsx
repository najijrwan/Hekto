
const ViewShopBtn = ({
    children,
    className = '',
    ...props
}) => {

    const baseStyle = `
        py-2.5 px-4.5 rounded-0.5
        text-white text-[12px] leading-none font-primary not-italic
        bg-[#08D15F]
        cursor-pointer
    `;
    return (
        <button
            className={`${baseStyle} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}

export default ViewShopBtn;