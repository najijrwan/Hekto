import React from 'react';
import { ShopNowBtn, } from '@/components/ui/Button.jsx'
import { Discount, } from '@/assets/icons/index.js';

const Promotion = () => {
    return (
        <section className='
        relative
        w-full h-[764px]
        bg-[#F2F0FF] opacity-100'
        >

            <img
                src="src/assets/images/image 32.png"
                alt="Lamp"
                className='
                    absolute top-0 left-[70px]'
            />

            <div className='
                absolute top-[203px] left-[375px]
                text-left'
            >

                <p className='
                    mb-3
                    text-accent text-paragraph/[28px] font-secondary font-bold'
                >
                    Best Furniture For Your Castle....
                </p>

                <p className='
                    w-[644px] text-black text-[53px] font-bold font-primary not-italic'
                >
                    New Furniture Collection Trends in 2020
                </p>

                <p className='
                    w-[559px]
                    text-sub-text text-paragraph/[28px] font-secondary font-bold'
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscingin phasellus non in justo.
                </p>

                <ShopNowBtn />
            </div>

            <img
                src="src/assets/images/sofa-1.png"
                alt="sofa-1"
                className='
                    absolute right-[240px] mt-[99px] mb-[36px] z-20'
            />

            <div className='
                    absolute right-[231px] mt-[80px] mb-[36px] size-[648px] rounded-full z-10
                    bg-[#ECD2FA59]'
            >
            </div>

            <div className='
                    absolute right-[173px] mt-[39px] mb-[74px] size-[651px] rounded-full z-10
                    bg-[#ECD2FA59]'
            >
            </div>

            <div className='
                w-[138px] h-[140px] absolute top-[94px] right-[185.44px] z-20 '
            >
                <span className='
                    absolute top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 z-20
                    text-white text-[35px] leading-[100%] text-center font-primary font-extrabold'
                >
                    50% off
                </span>
                <Discount className='absolute z-10' />
            </div>

        </section>
    );
}

export default Promotion;