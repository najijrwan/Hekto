

const UniqueFeatureSofa = ({ title }) => {
    return (
        <section
            className="
                w-full h-[560px] py-[15px] px-[435px] mb-[132px]
                flex
                bg-[#F1F0FF]">


            <img
                src="src/assets/images/Group 153.png"
                alt="Featured Sofa"
            />

            <div className="flex flex-col justify-center gap-[13px]">
                <header
                    className="
                        text-[35px] leading-[1.32] tracking-[1.5%] font-primary font-bold not-italic
                        text-text mb-[16px]"
                >
                    Unique Features Of leatest &
                    Trending Poducts
                </header>

                <div 
                    className="
                        flex flex-col gap-[13px]
                        text-[#ACABC3] text-[16px] leading-[1.32] tracking-[1.5%] font-secondary font-medium">
                    <p>
                        <span className="inline-block size-[11px] bg-[#F52B70] rounded-full"></span>
                        <span className="pl-[12px]">All frames constructed with hardwood solids and laminates</span>
                    </p>
                    <p className="leading-[1.75]">
                        <span className="inline-block size-[11px] bg-[#2B2BF5] rounded-full"></span>
                        <span className="pl-[12px]">
                            Reinforced with double wood dowels, glue, screw - nails corner
                            blocks and machine nails
                        </span>
                    </p>
                    <p>
                        <span className="inline-block size-[11px] bg-[#2BF5CC] rounded-full"></span>
                        <span className="pl-[12px]">Arms, backs and seats are structurally reinforced</span>
                    </p>
                </div>

                <div className="flex items-center gap-[19px] mt-[25px]">
                    <button
                        className="
                            py-[14px] px-[24px] rounded-[2px] bg-accent
                            text-[17px] text-white leading-normal tracing-[2%] font-primary font-semibold not-italic">
                        Add To Cart
                    </button>
                    <div className="flex flex-col gap-[3px]">
                        <p
                            className="
                                text-[14px] text-text leading-normal tracking-[2%] font-primary font-semibold not-italic"
                        >
                            B&B Italian Sofa
                        </p>
                        <p
                            className="
                                text-[14px] text-text leading-normal font-secondary font-normal">
                            $32.00
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default UniqueFeatureSofa;