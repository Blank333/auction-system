import Image from 'next/image'
import Link from 'next/link'

export default function auctions() {
    return (
            <div className='p-2 text-center flex flex-wrap justify-center'>
                    <div className='hover:border-blue-400 w-1/6 p-3 border-gray-300 border m-2 p-2 rounded-lg '>
                        <Link href = '/auctions/Variety'>
                            <a>
                                <Image src='/' alt="Image" height='300' width='300'/>
                                <p className=''>Variety Name</p>
                                <br />
                                
                            </a>
                        </Link>
                    </div>
                    <div className='hover:border-blue-400  w-1/6 p-3 border-gray-300 border m-2 p-2 rounded-lg '>
                        <Link href = '/auctions/Royal'>
                            <a>
                                <Image src='/images/royal.jpg' height='300' width='300'/>
                                <p className=''>Royal</p>
                                <br />
                                
                            </a>
                        </Link>
                    </div>
                    <div className='hover:border-blue-400  w-1/6 p-3 border-gray-300 border m-2 p-2 rounded-lg '>
                        <Link href = '/auctions/Royal'>
                            <a>
                                <Image src='/images/royal.jpg' height='300' width='300'/>
                                <p className=''>Royal</p>
                                <br />
                                
                            </a>
                        </Link>
                    </div>
                    <div className='hover:border-blue-400  w-1/6 p-3 border-gray-300 border m-2 p-2 rounded-lg '>
                        <Link href = '/auctions/Royal'>
                            <a>
                                <Image src='/images/royal.jpg' height='300' width='300'/>
                                <p className=''>Royal</p>
                                <br />
                                
                            </a>
                        </Link>
                    </div>

                    <div className='hover:border-blue-400  w-1/6 p-3 border-gray-300 border m-2 p-2 rounded-lg '>
                        <Link href = '/auctions/Golden'>
                            <a>
                                <Image src='/images/golden.webp' height='300' width='300'/>
                                <p className=''>Golden</p>
                                <br />
                                
                            </a>
                        </Link>
                    </div>

                    <div className='hover:border-blue-400  w-1/6 p-3 border-gray-300 border m-2 p-2 rounded-lg '>
                        <Link href = '/auctions/Tydeman'>
                            <a>
                                <Image src='/images/tydeman.jpg' height='300' width='300'/>
                                <p className=''>Tydeman</p>
                                <br />
                                
                            </a>
                        </Link>
                    </div>
                    
                    <div className='hover:border-blue-400  w-1/6 p-3 border-gray-300 border m-2 p-2 rounded-lg '>
                        <Link href = '/auctions/Granny-Smith'>
                            <a>
                                <Image src='/images/grannysmith.jpg' height='300' width='300'/>
                                <p className=''>Granny Smith</p>
                                <br />
                                
                            </a>
                        </Link>
                    </div>
            </div>
    )
}