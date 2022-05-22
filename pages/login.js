import Layout from '../components/layout';
import Link from 'next/link';

export default function Login() {
    return (
            <div className='flex place-content-center h-xsc bg-green-50'>
                <span>
                    <form action ='login' method='post' className='inline-flex drop-shadow-lg shadow flex-col bg-blue-200 rounded py-4 px-6 mt-20'>
                        <p className='inline-flex justify-center bg-green-300 p-2 mb-4 text-gray-800 rounded shadow w-1/3'>
                            Login
                        </p>

                        <input type='text' required id='user' name='user'  className='p-2 mb-2 shadow rounded' placeholder='Username' />
                        <input type='password' required id='password' name='password' className='p-2 mt-2 shadow rounded' placeholder='Password'/>
                        
                        <div className='inline-flex mt-3 pt-2 justify-between'>
                            <button type='submit' 
                                className='w-half bg-blue-400 hover:bg-blue-500 text-white font-bold rounded p-2'>
                                Login
                            </button>
                            <Link href='/register'>
                            <a className='w-half bg-blue-400 hover:bg-blue-500 text-white font-bold rounded p-2'>
                                Register
                            </a>
                            </Link>
                        </div>
                    </form>
                </span>
            </div>
    )
}