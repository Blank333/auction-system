import Image from 'next/image'

export default function Home() {
  return (
      <div className='container relative '>
        <main className='container w-screen h-screen relative ml-8'>
          <p className='z-10 relative text-center'>Big Apple very good</p>
          <Image src = '/images/bg.jpg' layout='fill' priority/>
        </main>

        <footer className='text-center'>
            Powered by blank
        </footer>
      </div>
  )
}
