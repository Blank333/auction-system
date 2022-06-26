import Link from 'next/link'
import  { useRouter } from 'next/router'
import Image from 'next/image'

export default function slug() {
  const router = useRouter()
  const { slug } =  router.query
  return (
      <div className='container flex p-2'>
        <div className='p-2'>
        <Image src="/" alt="Image" width="250" height="250" />
        <p>Item Name Grade { slug } Variety</p>
        <p>Seller: Farm Name</p>

        <p>Bid: Bid/box</p>
        <p>Harvest Date: Date</p>
        <Link href={`/auctions/${slug}/Listing`}>
          <a>
            <button className='w-24 bg-blue-400 hover:bg-blue-500 text-white font-bold rounded p-2'>
              Bid
            </button>
          </a>
        </Link>
        </div>

        <div className='p-2'>
        <Image src="/images/grannysmith.jpg" alt="Image" width="250" height="250" />
        <p>Blossom Apples Grade SS { slug } Variety</p>
        <p>Seller: Blossom Farms</p>

        <p>Bid: 2000/box</p>
        <p>Harvest Date: 26/06/22</p>
        <Link href={`/auctions/${slug}/Listing`}>
          <a>
            <button className='w-24 bg-blue-400 hover:bg-blue-500 text-white font-bold rounded p-2'>
              Bid
            </button>
          </a>
        </Link>
        </div>

        <div className='p-2'>
        <Image src="/images/grannysmith.jpg" alt="Image" width="250" height="250" />
        <p>Item Name Grade A { slug } Variety</p>
        <p>Seller: Lalu Farms</p>

        <p>Bid: 1500/box</p>
        <p>Harvest Date: 28/06/22</p>
        <Link href={`/auctions/${slug}/Listing`}>
          <a>
            <button className='w-24 bg-blue-400 hover:bg-blue-500 text-white font-bold rounded p-2'>
              Bid
            </button>
          </a>
        </Link>
        </div>


      </div>
  )
}
