import Navbar from './navbar'

export default function layout({children}) {
  return (
    <div>

      <Navbar />

      <div className='p-3 mr-4'> 
        {children}
      </div>

    </div>
  )
}
