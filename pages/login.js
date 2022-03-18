import Layout from '../components/layout';
import Link from 'next/link';

export default function Login() {
    return (
        <Layout>
            <div className='flex place-content-center place-items-center h-screen bg-green-50'>
                <span className=''>
                    <form action ='login' method='post' className='inline-flex drop-shadow-lg shadow flex-col bg-blue-200 rounded py-4 px-6'>
                        
                        <label for='user' className='py-1'>Username</label>
                        <input type='text' id='user' name='user'  className='p-1 shadow rounded' placeholder='Username' />
                        
                        <label for='password' className='py-1 pt-3'>Password</label>
                        <input type='password' id='password' name='password' className='p-1 shadow rounded' placeholder='Password'/>
                        
                        <div className='inline-flex mt-3 pt-2 justify-between'>
                            <button type='submit' 
                                className='w-half bg-blue-400 hover:bg-blue-500 text-white font-bold rounded p-2'>
                                Login
                            </button>
                            <Link href='/login'>
                            <a className='w-half bg-blue-400 hover:bg-blue-500 text-white font-bold rounded p-2'>
                                Register
                            </a>
                            </Link>
                        </div>
                    </form>
                </span>
            </div>
        </Layout>
    )
}