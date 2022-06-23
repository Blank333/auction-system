import Image from 'next/image'
import Link from 'next/link'

export default function auctions() {
    return (
            <div className='p-2 text-center flex flex-wrap justify-center'>
                    <div className='w-1/6 p-3 border-red-400 border m-2 p-2 rounded-lg '>
                        <Link href = '/auctions/Royal'>
                            <a>
                                <p className=''>Royal</p>
                                <br />
                                <Image src='/images/royal.jpg' height='300' width='300'/>
                            </a>
                        </Link>
                    </div>
                    <div className='  w-1/6 p-3 border-red-400 border m-2 p-2 rounded-lg '>
                        <Link href = '/auctions/Royal'>
                            <a>
                                <p className=''>Royal</p>
                                <br />
                                <Image src='/images/royal.jpg' height='300' width='300'/>
                            </a>
                        </Link>
                    </div>
                    <div className='  w-1/6 p-3 border-red-400 border m-2 p-2 rounded-lg '>
                        <Link href = '/auctions/Royal'>
                            <a>
                                <p className=''>Royal</p>
                                <br />
                                <Image src='/images/royal.jpg' height='300' width='300'/>
                            </a>
                        </Link>
                    </div>
                    <div className='  w-1/6 p-3 border-red-400 border m-2 p-2 rounded-lg '>
                        <Link href = '/auctions/Royal'>
                            <a>
                                <p className=''>Royal</p>
                                <br />
                                <Image src='/images/royal.jpg' height='300' width='300'/>
                            </a>
                        </Link>
                    </div>

                    <div className='  w-1/6 p-3 border-red-400 border m-2 p-2 rounded-lg '>
                        <Link href = '/auctions/Golden'>
                            <a>
                                <p className=''>Golden</p>
                                <br />
                                <Image src='/images/golden.webp' height='300' width='300'/>
                            </a>
                        </Link>
                    </div>

                    <div className='  w-1/6 p-3 border-red-400 border m-2 p-2 rounded-lg '>
                        <Link href = '/auctions/Tydeman'>
                            <a>
                                <p className=''>Tydeman</p>
                                <br />
                                <Image src='/images/tydeman.jpg' height='300' width='300'/>
                            </a>
                        </Link>
                    </div>
                    
                    <div className='  w-1/6 p-3 border-red-400 border m-2 p-2 rounded-lg '>
                        <Link href = '/auctions/Granny-Smith'>
                            <a>
                                <p className=''>Granny Smith</p>
                                <br />
                                <Image src='/images/grannysmith.jpg' height='300' width='300'/>
                            </a>
                        </Link>
                    </div>
            </div>
    )
}