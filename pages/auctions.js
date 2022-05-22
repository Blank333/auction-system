import Image from 'next/image'
import Layout from '../components/layout'
import Link from 'next/link'

export default function auctions() {
    return (
            <div className='container p-2 text-center flex flex-warp'>
                    <div className='container h-1/4 w-1/4 p-3'>
                        <Link href = '/auctions/Royal'>
                            <a>
                                <p className=''>Royal</p>
                                <br />
                                <Image src='/images/apple.jpg' height='300' width='300'/>
                            </a>
                        </Link>
                    </div>

                    <div className='container h-1/4 w-1/4 p-3'>
                        <Link href = '/auctions/Golden'>
                            <a>
                                <p className=''>Golden</p>
                                <br />
                                <Image src='/images/apple.jpg' height='300' width='300'/>
                            </a>
                        </Link>
                    </div>

                    <div className='container h-1/4 w-1/4 p-3'>
                        <Link href = '/auctions/Gale-Gala'>
                            <a>
                                <p className=''>Gale Gala</p>
                                <br />
                                <Image src='/images/apple.jpg' height='300' width='300'/>
                            </a>
                        </Link>
                    </div>
                    
                    <div className='container h-1/4 w-1/4 p-3'>
                        <Link href = '/auctions/Granny-Smith'>
                            <a>
                                <p className=''>Granny Smith</p>
                                <br />
                                <Image src='/images/apple.jpg' height='300' width='300'/>
                            </a>
                        </Link>
                    </div>
            </div>
    )
}