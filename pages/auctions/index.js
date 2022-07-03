import Image from 'next/image'
import Link from 'next/link'

export default function auctions() {
    return (
            <div className='p-2 text-center flex flex-wrap justify-center'>
                    <div className='hover:border-blue-400  w-1/6 p-3 border-gray-300 border-2 border-b-4 m-2 p-2 rounded-lg shadow-lg '>
                        <Link href = '/auctions/Apples'>
                            <a className='flex flex-col'>
                                <Image src='/images/royal.jpg' height='300' width='300'/>
                                <p className='p-1 mt-2 border-2 border-b-4 border-gray-300 rounded-lg shadow-lg hover:border-blue-200 hover:bg-gray-200 '>Apples</p>
  
                                
                            </a>
                        </Link>
                    </div>
                    <div className='hover:border-blue-400  w-1/6 p-3 border-gray-300 border-2 border-b-4 m-2 p-2 rounded-lg shadow-lg '>
                        <Link href = '/auctions/Pears'>
                            <a className='flex flex-col'>
                                <Image src='/images/pear.jpg' height='300' width='300'/>
                                <p className='p-1 mt-2 border-2 border-b-4 border-gray-300 rounded-lg shadow-lg hover:border-blue-200 hover:bg-gray-200 '>Pears</p>
  
                                
                            </a>
                        </Link>
                    </div>
                    <div className='hover:border-blue-400  w-1/6 p-3 border-gray-300 border-2 border-b-4 m-2 p-2 rounded-lg shadow-lg '>
                        <Link href = '/auctions/Peaches'>
                            <a className='flex flex-col'>
                                <Image src='/images/peach.jpg' height='300' width='300'/>
                                <p className='p-1 mt-2 border-2 border-b-4 border-gray-300 rounded-lg shadow-lg hover:border-blue-200 hover:bg-gray-200 '>Peaches</p>
  
                                
                            </a>
                        </Link>
                    </div>

                    <div className='hover:border-blue-400  w-1/6 p-3 border-gray-300 border-2 border-b-4 m-2 p-2 rounded-lg shadow-lg '>
                        <Link href = '/auctions/Plums'>
                            <a className='flex flex-col'>
                                <Image src='/images/plum.jpg' height='300' width='300'/>
                                <p className='p-1 mt-2 border-2 border-b-4 border-gray-300 rounded-lg shadow-lg hover:border-blue-200 hover:bg-gray-200 '>Plums</p>
  
                                
                            </a>
                        </Link>
                    </div>

                    <div className='hover:border-blue-400  w-1/6 p-3 border-gray-300 border-2 border-b-4 m-2 p-2 rounded-lg shadow-lg '>
                        <Link href = '/auctions/Apricot'>
                            <a className='flex flex-col'>
                                <Image src='/images/apricot.jpg' height='300' width='300'/>
                                <p className='p-1 mt-2 border-2 border-b-4 border-gray-300 rounded-lg shadow-lg hover:border-blue-200 hover:bg-gray-200 '>Apricot</p>
  
                                
                            </a>
                        </Link>
                    </div>
                    
                    <div className='hover:border-blue-400  w-1/6 p-3 border-gray-300 border-2 border-b-4 m-2 p-2 rounded-lg shadow-lg '>
                        <Link href = '/auctions/Cherry'>
                            <a className='flex flex-col'>
                                <Image src='/images/cherry.jpg' height='300' width='300'/>
                                <p className='p-1 mt-2 border-2 border-b-4 border-gray-300 rounded-lg shadow-lg hover:border-blue-200 hover:bg-gray-200 '>Cherry</p>
  
                                
                            </a>
                        </Link>
                    </div>
            </div>
    )
}