import Image from 'next/image'

export default function Home() {
  return (
      <div>
        <div className='container w-screen flex justify-center rounded'>
          <main className='w-3/4 h-screen text-center bg-blue-50'>
            <div className='py-10 flex'>
              <div className='border my-4 mx-8 p-4 border-green-200 shadow-lg rounded-lg bg-gray-50'>
                <Image src="/images/card1.jpg" width='600' height='500' className='rounded-lg shadow'/>
                <p className='p-2'>Modern solutions for auctioning apples, soon in a market near you.</p>
              </div>
              <div className='border my-4 mx-8 p-4 border-green-200 shadow-lg rounded-lg bg-gray-50'>
                <Image src="/images/card2.jpg" width='600' height='500' className='rounded-lg shadow'/>
                <p className='p-2'>Hassle Free selling and buying apples from the comfort of your home.</p>
              </div>
              <div className='border my-4 mx-8 p-4 border-green-200 shadow-lg rounded-lg bg-gray-50'>
                <Image src="/images/card3.jpg" width='600' height='500' className='rounded-lg shadow'/>
                <p className='p-2'>Get all the details about the product with a touch of a fingertip. </p>
              </div>
            </div>
          </main>
        </div>

      </div>
  )
}
