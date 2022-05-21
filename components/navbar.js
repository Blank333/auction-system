import Link from 'next/link'
import { useState } from 'react'

export default function navbar() {
    const [active, setActive] = useState(false);

    const handleClick = () => {
      setActive(!active);
    };

    return (
        <div>
            <nav className = 'flex items-center justify-center flex-warp bg-green-400 p-3 text-gray-100 rounded-lg'>
    
                <button className= 'inline-flex p-3 hover:rounded-lg hover:bg-green-500 rounded lg:hidden ml-auto'
                    onClick={handleClick}
                >
                    Menu
                </button>
                <div className={`${ active ? '' : 'hidden'} w-full lg:inline-flex lg:w-auto lg:flex-row lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto`}>
                    <Link href='/'>
                        <a classname = 'inline-flex p-3 mr-4'>
                            <span className = 'text-xl hover:rounded-lg hover:bg-green-500 font-bold uppercase tracking-wide p-2'>
                                Home
                            </span>
                        </a>
                    </Link>
                    <Link href='/auctions'>
                        <a classname = 'inline-flex p-2 mr-4'>
                            <span className = 'text-xl hover:rounded-lg hover:bg-green-500 font-bold uppercase tracking-wide p-2'>
                                Auctions
                            </span>
                        </a>
                    </Link>
                    <Link href='/about'>
                        <a classname = 'inline-flex p-2 mr-4'>
                            <span className = 'text-xl hover:rounded-lg hover:bg-green-500 font-bold uppercase tracking-wide p-2'>
                                About
                            </span>
                        </a>
                    </Link>
                    <Link href='/contact'>
                        <a classname = 'inline-flex p-2 mr-4'>
                            <span className = 'text-xl hover:rounded-lg hover:bg-green-500 font-bold uppercase tracking-wide p-2'>
                                Contact Us
                            </span>
                        </a>
                    </Link>
                    <Link href='/login'>
                        <a classname = 'inline-flex p-2 mr-4'>
                            <span className = 'text-xl hover:rounded-lg hover:bg-green-500 font-bold uppercase tracking-wide p-2'>
                                Login
                            </span>
                        </a>
                    </Link>
                </div>               
            </nav>
        </div>
    )
}