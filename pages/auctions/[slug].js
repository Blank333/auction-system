import Link from 'next/link'
import  { useRouter } from 'next/router'
import Image from 'next/image'

export default function slug() {
  const router = useRouter()
  const { slug } =  router.query
  return (
      <div className='container flex p-2'>
        <div className='p-2'>
        <Image src="/" alt="Image" width="150" height="150" />
        <p>Item Name Grade { slug } Variety</p>
        <p>Seller: Farm Name</p>

        <p>Price: Price/box</p>
        <p>Harvest Date: Date</p>
        <Link href={`/auctions/${slug}/Listing`}>
          <a>
            <button className='w-80 bg-blue-400 hover:bg-blue-500 text-white font-bold rounded p-2'>
              Bid
            </button>
          </a>
        </Link>
        </div>

        <div className='p-2'>
        <Image src="/images/grannysmith.jpg" alt="Image" width="150" height="150" />
        <p>Blossom Apples Grade SS { slug } Variety</p>
        <p>Seller: Blossom Farms</p>

        <p>Price: 2000/box</p>
        <p>Harvest Date: 26/06/22</p>
        <Link href={`/auctions/${slug}/Listing`}>
          <a>
            <button className='w-80 bg-blue-400 hover:bg-blue-500 text-white font-bold rounded p-2'>
              Bid
            </button>
          </a>
        </Link>
        </div>

        <div className='p-2'>
        <Image src="/images/grannysmith.jpg" alt="Image" width="150" height="150" />
        <p>Item Name Grade A { slug } Variety</p>
        <p>Seller: Lalu Farms</p>

        <p>Price: 1500/box</p>
        <p>Harvest Date: 28/06/22</p>
        <Link href={`/auctions/${slug}/Listing`}>
          <a>
            <button className='w-80 bg-blue-400 hover:bg-blue-500 text-white font-bold rounded p-2'>
              Bid
            </button>
          </a>
        </Link>
        </div>


      </div>
  )
}
