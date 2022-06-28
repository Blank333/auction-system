import Link from 'next/link'
import  { useRouter } from 'next/router'
import Image from 'next/image'

export default function slug() {
  const router = useRouter()
  const { slug } =  router.query
  return (
      <div className='container flex p-2'>
        <Link href={`/auctions/${slug}/Listing`}>
          <a>
            <div className='p-2 m-2 border border-gray-200 hover:border-blue-200 rounded'>
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
        </Link>

        <Link href={`/auctions/${slug}/Listing`}>
          <a>
            <div className='p-2 m-2 border border-gray-200 hover:border-blue-200 rounded'>
              <div>
                <Image src="/images/grannysmith.jpg" alt="Image" width="150" height="150" />
              </div>
              <div>
                <p>Blossom Apples Grade SS { slug } Variety</p>
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
          <a> 
            <div className='p-2 m-2 border border-gray-200 hover:border-blue-200 rounded'>
            <div>
              <Image src="/images/grannysmith.jpg" alt="Image" width="150" height="150" />
            </div>
            <p>Item Name Grade A { slug } Variety</p>
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
  )
}
