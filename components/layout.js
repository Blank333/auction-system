import Navbar from './navbar'

export default function layout({children}) {
  return (
    <div>

      <Navbar />

      <div className='mx-4'> 
        {children}
      </div>

    </div>
  )
}
