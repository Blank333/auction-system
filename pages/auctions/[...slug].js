import  { useRouter } from 'next/router'

export default function slug() {
  const router = useRouter()
  const { slug } =  router.query
  return (
      <div className='m-4 p-2'>
        <p>Item Name { slug }</p>
        <p>Harvest Date: date</p>
        <p>Boxes Available: Total Boxes</p>
        <p>Starting Bid: Bid/Box</p>
        <p>Current Bid: Bid/box</p>
        <p>Seller: BusniessName</p>
        
        <div>
          <p>Details</p>
          <p>Location: Place</p>
          <p>Weather Condition: Weather, climate</p>
          <p>Grade: SSSS</p>
        </div>
        
        <form className='flex flex-col'>
          <input type='text' className='w-80 p-2 mb-2 shadow-lg border border-gray-400 rounded' placeholder='Enter Bid' />
          <button type='submit' className='w-80 bg-blue-400 hover:bg-blue-500 text-white font-bold rounded p-2'>
                Place Bid
          </button>
        </form>
      </div>
  )
}
