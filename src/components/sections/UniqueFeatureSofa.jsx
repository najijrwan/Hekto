

const UniqueFeatureSofa = ({ title }) => {
    return (
        <section
            data-title={title}
            className="
                w-full h-[579px] py-[15px] px-[435px] mb-[132px]
                flex
                bg-[#F1F0FF]"
        >

            <img
                src="src/assets/images/Group 153.png"
                alt="Featured Sofa"
            />

            <div className="mt-[82px] flex flex-col justify-start gap-[13px]">
                <header
                    className="
                        text-[35px] leading-[1.32] tracking-[0.015em] font-primary font-bold not-italic
                        text-text mb-[16px] w-[543px]"
                >
                    {title}
                </header>

                <div
                    className="
                        w-[461px]
                        flex flex-col gap-[13px]
                        text-[#ACABC3] text-[16px] leading-[1.32] tracking-[1.5%] font-secondary font-medium">
                    <p className="flex gap-[12px]">
                        <span className="mt-[7px] size-[11px] shrink-0 bg-[#F52B70] rounded-full"></span>
                        <span>All frames constructed with hardwood solids and laminates</span>
                    </p>
                    <p className="flex gap-[12px] leading-[1.75]">
                        <span className="mt-[7px] size-[11px] shrink-0 bg-[#2B2BF5] rounded-full"></span>
                        <span>
                            Reinforced with double wood dowels, glue, screw - nails corner
                            blocks and machine nails
                        </span>
                    </p>
                    <p className="flex gap-[12px]">
                        <span className="mt-[7px] size-[11px] shrink-0 bg-[#2BF5CC] rounded-full"></span>
                        <span>Arms, backs and seats are structurally reinforced</span>
                    </p>
                </div>

                <div className="flex items-center gap-[19px] mt-[25px]">
                    <button
                        className="
                            w-[157px] h-[45px] rounded-[2px] bg-accent
                            text-[17px] text-white align-top leading-normal tracking-[0.02em] font-primary font-[200] not-italic">
                        Add To Cart
                    </button>
                    <div className="flex flex-col gap-[3px] align-top">
                        <p
                            className="
                                text-[14px] text-text leading-none tracking-[0.02em] font-primary font-semibold not-italic"
                        >
                            B&B Italian Sofa
                        </p>
                        <p
                            className="
                                text-[14px] text-text leading-none font-secondary font-normal">
                            $32.00
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default UniqueFeatureSofa;