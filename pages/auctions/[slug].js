import Link from 'next/link'
import  { useRouter } from 'next/router'
import Image from 'next/image'
import Variety from '../../components/varieties'

export default function slug() {
  const router = useRouter()
  const { slug } =  router.query
  return (
    <div className='flex '>
      <Variety />
      <div className='container flex flex-wrap p-2'>
        
        {/* <Link href={`/auctions/${slug}/Listing`}>
          <a className = 'w-1/5'>
            <div className='p-2 my-2 mr-2 border border-gray-200 hover:border-blue-200 rounded'>
              <div>
                <Image src="/" alt="Image" width="150" height="150" />
              </div>
            <p>Item Name Grade { slug } Variety</p>
            <p>Seller: Farm Name</p>

            <p>Bid: Bid/box</p>
            <p>Harvest Date: Date</p>
            
          
            
            </div>
            <button className='w-24 bg-blue-400 hover:bg-blue-500 text-white font-bold rounded p-2 my-2'>
              Bid
            </button>
          </a>
        </Link> */}
        <Link href={`/auctions/${slug}/Listing`}>
          <a className = 'w-1/5'>
            <div className='p-2 my-2 mr-2 border-2 border-b-4 border-gray-200 hover:border-blue-200 rounded shadow-lg'>
              <div className='flex justify-center'>
                <Image src="/images/grannysmith.jpg" alt="Image" width="170" height="150" />
              </div>
              <div>
                <p>Blossom Apples Grade SS { slug } </p>
                <p>Seller: Blossom Farms</p>

                <p>Bid: 2000/box</p>
                <p>Harvest Date: 26/06/22</p>
              </div>              
              
              
            </div>
            <button className='w-24 bg-blue-400 hover:bg-blue-500 text-white font-bold rounded p-2 my-2'>
                Bid
            </button>
          </a>
        </Link>
        
        <Link href={`/auctions/${slug}/Listing`}>
          <a className = 'w-1/5'>
            <div className='p-2 my-2 mr-2 border-2 border-b-4 border-gray-200 hover:border-blue-200 rounded shadow-lg'>
              <div className='flex justify-center'>
                <Image src="/images/grannysmith.jpg" alt="Image" width="170" height="150" />
              </div>
              <div>
                <p>Blossom Apples Grade SS { slug } </p>
                <p>Seller: Blossom Farms</p>

                <p>Bid: 2000/box</p>
                <p>Harvest Date: 26/06/22</p>
              </div>              
              
              
            </div>
            <button className='w-24 bg-blue-400 hover:bg-blue-500 text-white font-bold rounded p-2 my-2'>
                Bid
            </button>
          </a>
        </Link>

        <Link href={`/auctions/${slug}/Listing`}>
          <a className = 'w-1/5'> 
            <div className='p-2 my-2 mr-2 border-2 border-b-4 border-gray-200 hover:border-blue-200 rounded shadow-lg'>
            <div className='flex justify-center'>
              <Image src="/images/grannysmith.jpg" alt="Image" width="170" height="150" />
            </div>
            <p>Item Name Grade A { slug } </p>
            <p>Seller: Lalu Farms</p>

            <p>Bid: 1500/box</p>
            <p>Harvest Date: 28/06/22</p>
            
            
        
            </div> 
            <button className='w-24 bg-blue-400 hover:bg-blue-500 text-white font-bold rounded my-2 p-2'>
              Bid
            </button>
          </a>
        </Link>
        
        <Link href={`/auctions/${slug}/Listing`}>
          <a className = 'w-1/5'> 
            <div className='p-2 my-2 mr-2 border-2 border-b-4 border-gray-200 hover:border-blue-200 rounded shadow-lg'>
            <div className='flex justify-center'>
              <Image src="/images/grannysmith.jpg" alt="Image" width="170" height="150" />
            </div>
            <p>Item Name Grade A { slug } </p>
            <p>Seller: Lalu Farms</p>

            <p>Bid: 1500/box</p>
            <p>Harvest Date: 28/06/22</p>
        
            </div> 
            <button className='w-24 bg-blue-400 hover:bg-blue-500 text-white font-bold rounded my-2 p-2'>
              Bid
            </button>
          </a>
        </Link>

        <Link href={`/auctions/${slug}/Listing`}>
          <a className = 'w-1/5'> 
            <div className='p-2 my-2 mr-2 border-2 border-b-4 border-gray-200 hover:border-blue-200 rounded shadow-lg'>
            <div className='flex justify-center'>
              <Image src="/images/grannysmith.jpg" alt="Image" width="170" height="150" />
            </div>
            <p>Item Name Grade A { slug } </p>
            <p>Seller: Lalu Farms</p>

            <p>Bid: 1500/box</p>
            <p>Harvest Date: 28/06/22</p>
            
            
        
            </div> 
            <button className='w-24 bg-blue-400 hover:bg-blue-500 text-white font-bold rounded my-2 p-2'>
              Bid
            </button>
          </a>
        </Link>

        <Link href={`/auctions/${slug}/Listing`}>
          <a className = 'w-1/5'> 
            <div className='p-2 my-2 mr-2 border-2 border-b-4 border-gray-200 hover:border-blue-200 rounded shadow-lg'>
            <div className='flex justify-center'>
              <Image src="/images/grannysmith.jpg" alt="Image" width="170" height="150" />
            </div>
            <p>Item Name Grade A { slug } </p>
            <p>Seller: Lalu Farms</p>

            <p>Bid: 1500/box</p>
            <p>Harvest Date: 28/06/22</p>
            
            
        
            </div> 
            <button className='w-24 bg-blue-400 hover:bg-blue-500 text-white font-bold rounded my-2 p-2'>
              Bid
            </button>
          </a>
        </Link>
        </div>
      </div>
  )
}
