import Link from 'next/link'
import  { useRouter } from 'next/router'

export default function slug() {
  const router = useRouter()
  const { slug } =  router.query
  return (
      <div className='container flex p-2'>
        <div className='p-2'>
        <p>TO DO</p>
        <p>Item: { slug }</p>
        <p>Price: 1500/Box</p>
        <p>Harvest Date: date</p>
        <p>Boxes: 200</p>
        <p>Seller: userName</p>
        <Link href={`/auctions/${slug}/Listing`}>
          <a>
            <button className='w-80 bg-blue-400 hover:bg-blue-500 text-white font-bold rounded p-2'>
              Buy
            </button>
          </a>
        </Link>
        </div>
        <div className='p-2'>
        <p>TO DO</p>
        <p>Item: { slug }</p>
        <p>Price: 1500/Box</p>
        <p>Harvest Date: date</p>
        <p>Boxes: 200</p>
        <p>Seller: userName</p>
        <Link href={`/auctions/${slug}/Listing`}>
          <a>
            <button className='w-80 bg-blue-400 hover:bg-blue-500 text-white font-bold rounded p-2'>
              Buy
            </button>
          </a>
        </Link>
        </div>
        <div className='p-2'>
        <p>TO DO</p>
        <p>Item: { slug }</p>
        <p>Price: 1500/Box</p>
        <p>Harvest Date: date</p>
        <p>Boxes: 200</p>
        <p>Seller: userName</p>
        
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
