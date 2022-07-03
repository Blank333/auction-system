import Link from 'next/link'
import { useState } from 'react'

export default function navbar() {
    const [active, setActive] = useState(false);

    const handleClick = () => {
      setActive(!active);
    };

    return (
        <div className='bg-banner pt-1 bg-no-repeat w-screen h-28 bg-center'>
            <nav className = 'flex items-center w-full flex-warp shadow-lg rounded-lg bg-gray-300 text-gray-800'>
            
                <navbar className = 'text-xs font-bold uppercase tracking-wide w-full inline-flex'>
                    <button className= 'inline-flex p-3 hover:rounded-lg hover:bg-green-100 rounded lg:hidden ml-auto'
                        onClick={handleClick}
                    >
                        Menu
                    </button>
                    <div className={`${ active ? '' : 'hidden'} lg:flex w-full`}>
                            <div className='flex w-full items-center'>    
                                <Link href='/'>
                                    <a className = 'inline-flex p-3 mr-4'>
                                        <span className = 'hover:rounded-lg hover:bg-green-100 p-2'>
                                            Home
                                        </span>
                                    </a>
                                </Link>
                                <Link href='/auctions'>
                                    <a className = 'inline-flex p-2 mr-4'>
                                        <span className = 'hover:rounded-lg hover:bg-green-100 p-2'>
                                            Auctions
                                        </span>
                                    </a>
                                </Link>
                                {/* <Link href='/about'>
                                    <a className = 'inline-flex p-2 mr-4'>
                                        <span className = 'hover:rounded-lg hover:bg-green-100 p-2'>
                                            About
                                        </span>
                                    </a>
                                </Link> */}
                                <Link href='/contact'>
                                    <a className = 'inline-flex p-2 mr-4'>
                                        <span className = 'hover:rounded-lg hover:bg-green-100 p-2'>
                                            Contact Us
                                        </span>
                                    </a>
                                </Link>
                            </div>
                            <div className='flex w-full justify-end items-center'>
                                <Link href='/login'>
                                    <a className = 'p-2 mr-4'>
                                        <span className = 'hover:rounded-lg hover:bg-green-100 p-2'>
                                            Login
                                        </span>
                                    </a>
                                </Link>
                                <Link href='/register'>
                                    <a className = 'p-2 mr-4'>
                                        <span className = 'hover:rounded-lg hover:bg-green-100 p-2'>
                                            Register
                                        </span>
                                    </a>
                                </Link>
                            </div>
                    </div>               
                </navbar>
            </nav>
        </div>
    )
}