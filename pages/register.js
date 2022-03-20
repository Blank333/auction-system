import Layout from '../components/layout';
import Link from 'next/link';

export default function Register() {
    return (
        <Layout>
            <div className='flex place-content-center place-items-center h-screen bg-green-50 text-gray-900'>
                <span>
                    <form action ='register' method='post' className='inline-flex drop-shadow-lg shadow flex-col bg-blue-200 rounded py-4 px-6'>
                        <p className='inline-flex justify-center bg-green-300 p-2 mb-4 text-gray-800 rounded shadow w-1/3'>
                            Create Account
                        </p>

                        <input type='text' required id='user' name='user' className='my-2 p-2 shadow rounded' placeholder='Username'/>
                        <input type='password' required id='password' name='password' className='my-2 p-2 shadow rounded' placeholder='Password'/>

                        <div className='inline-flex my-2 justify-between '>
                            <input type='text' required id='firstName' name='firstName'  className='mr-2 p-2 shadow rounded' placeholder='First name' />
                            <input type='text' required id='lastName' name='lastName'  className='ml-2 p-2 shadow rounded' placeholder='Last name' />
                        </div>
                        
                        <div className='inline-flex my-2 justify-between my-2'>
                            <input type='number' minLength='10' maxLength='10' id='mobile' name='mobile'  className='mr-2 p-2 shadow rounded' placeholder='Mobile No.' />
                            <input type='text' required id='country' name='country'  className='ml-2 p-2 shadow rounded' placeholder='Country' />
                        </div>

                        <div className='inline-flex my-2 justify-between'>
                            <label htmlFor='dob' className='mr-5 py-1'>Date of Birth</label>
                            <input type='date' id='dob' name='dob' className='w-2/3 p-2 shadow rounded' />
                        </div>
                        
                        <div className='inline-flex my-2 justify-between'>
                            <p>Sex</p>
                            <section className='inline-flex justify-content-end p-2'>
                                <input type='radio' id='male' name='sex' value='male' className='mx-2 p-2 shadow rounded' />
                                <label htmlFor='male' className='mr-5 py-1'>Male</label>
                                <input type='radio' id='female' name='sex' value='female' className='mx-2 p-2 shadow rounded' />
                                <label htmlFor='female' className='mr-5 py-1'>Female</label>
                            </section>
                        </div>

                        <div className='inline-flex mt-3 pt-2 justify-center'>
                                <button type='submit' 
                                    className='w-half bg-blue-400 hover:bg-blue-500 text-white font-bold rounded p-2'>
                                    Register
                                </button>
                        </div>

                    </form>
                </span>
            </div>
        </Layout>
    )
}