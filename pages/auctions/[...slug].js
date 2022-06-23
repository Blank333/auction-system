import  { useRouter } from 'next/router'

export default function slug() {
  const router = useRouter()
  const { slug } =  router.query
  return (
      <div className='m-4 p-2'>
      {console.log(slug)}
        <p>TO DO</p>
        <p>Item: { slug }</p>
        <p>Price: 1500/Box</p>
        <p>Harvest Date: date</p>
        <p>Boxes: 200</p>
        <p>Seller: userName</p>
        <p>Details Details Details</p>
        <p>API Integration</p>
        <form className='flex flex-col'>
          <input type='text' className='w-80 p-2 mb-2 shadow rounded' placeholder='Enter Bid' />
          <button type='submit' className='w-80 bg-blue-400 hover:bg-blue-500 text-white font-bold rounded p-2'>
                Place Bid
          </button>
        </form>
      </div>
  )
}
