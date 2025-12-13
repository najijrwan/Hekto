import React from 'react';
import { ChevronDown, Search} from '@/assets/icons';
const NavBar = () => {

    const navItems = [
        { label: "Pages", },
        { label: "Products", },
        { label: "Blog", },
        { label: "Shop", },
        { label: "Contact", },
    ]
    return (
        <nav className='
        w-full py-[19px] px-[371.5px] 
        flex items-center justify-center
        text-[#0D0E43]'
        >
            <div className='
            w-full flex items-center'
            >
                <h1 className='
                font-primary font-bold text-[34px]'
                >
                    Hekto
                </h1>

                <ul className='
                flex gap-[35px] ml-[88px] mr-[227px] 
                font-secondary font-normal text-button/[20px] '
                >
                    <li>
                        <button className='flex items-center'>
                            <span>Home</span>
                            <ChevronDown className='text-black'/>
                        </button>
                    </li>
                    {navItems.map((item, idx) => (
                        <li key={idx} >
                            <button className=''
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>

                <div className='
                relative
                w-full h-10 border-2 border-[#E7E6EF] '
                >
                    <input
                        type="text"
                        placeholder="Search Product..."
                        className='
                        w-full h-full px-4 
                        outline-none 
                        font-secondary font-normal text-button/[20px] '
                    />
                    <button className='
                    absolute top-0 right-0
                    h-full w-12.5
                    flex items-center justify-center
                    bg-accent  border-white'
                    >
                        <Search />
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;