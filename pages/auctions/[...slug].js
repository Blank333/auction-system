import Image from 'next/image'
import  { useRouter } from 'next/router'

export default function slug() {
  const router = useRouter()
  const { slug } =  router.query
  return (
    <div className='container m-4 p-2'>
      <div className='flex flex-wrap'>
          <div className='p-2 m-2 border border-gray-400 rounded-lg'>
            <Image src='/images/grannysmith.jpg' className='rounded-sm' width='400' height='400' />
          </div>
          <div className='w-1/2'>
            <section className='inline-flex w-full p-2'>
              <div className='mx-10 w-3/4'>
                <p>Item Name { slug }</p>
                <p>Harvest Date: date</p>
                <p>Boxes Available: Total Boxes</p>
                <p>Starting Bid: Bid/Box</p>
                <p>Current Bid: Bid/box</p>
                <p>Seller: BusniessName</p>
              </div>
              <div className='mx-10 w-1/2'>
                <p>Details:</p>
                <p>Sizes: Pitu(P), Extra Small(XS), Small(S), Medium(M), Large(L), Extra Large(XL)</p>
                <br />
                <p>Location: Place</p>
                <p>Grade: A</p>
                <p>Boxes Per Size: 40P, 50XS, 20L, 5XL</p>
                <p>Nearest Market (Pickup): Narail</p>
              </div>
            </section>
            <section className='container'>
              <form className='flex flex-col mx-10 my-4 p-2'>
                <input type='number' className='w-80 p-2 mb-2 shadow-lg border border-gray-400 rounded' placeholder='Enter Bid' />
                <button type='submit' className='w-80 bg-blue-400 hover:bg-blue-500 text-white font-bold rounded p-2'>
                      Place Bid
                </button>
              </form>        
            </section>
          </div>
      </div>
    </div>
  )
}
