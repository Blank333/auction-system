import Link from 'next/link';
import { useState } from 'react'

export default function Register() {
    const [accType, setAcc] = useState("personal")
    const showHide = (e) => {
        const { id } = e.nativeEvent.originalTarget 
        setAcc(id)
        console.log(accType)
    };
    
    return (
            <div className='flex place-content-center h-xsc bg-green-50 text-gray-900'>
                <span className=''>
                    <form action ='register' method='post' className='inline-flex drop-shadow-lg shadow flex-col bg-blue-200 rounded py-4 px-6 mt-10'>
                        <p className='inline-flex justify-center bg-green-300 p-2 mb-4 text-gray-800 rounded shadow w-1/3'>
                            Create Account
                        </p>
                        
                        <section className='inline-flex justify-center pb-3'>
                            <input type='radio' id='personal' name='accType' value='personal' onClick={(e) => showHide(e)} className='mx-2 p-2 shadow rounded' />
                            <label htmlFor='personal' className='mr-5 py-1'>Personal</label>
                            <input type='radio' id='business' name='accType' value='business' onClick={(e) => showHide(e)} className='mx-2 p-2 shadow rounded' />
                            <label htmlFor='business' className='mr-5 py-1'>Business</label>
                        </section>

                        <section id="personal" className={` ${accType=='personal' ? "" : "hidden"} inline-flex flex-col`}>
                            <input type='text' required id='user' name='user' className='my-2 p-2 shadow rounded' placeholder='Username'/>
                            <input type='text' required id='email' name='email' className='my-2 p-2 shadow rounded' placeholder='Email'/>
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

                        </section>

                        <section id="personal" className={` ${accType=='business' ? "" : "hidden"} inline-flex flex-col`}>
                            <input type='text' required id='business' name='business' className='my-2 p-2 shadow rounded' placeholder='Business Name'/>
                            <input type='text' required id='email' name='email' className='my-2 p-2 shadow rounded' placeholder='Business Email'/>
                            <input type='password' required id='password' name='password' className='my-2 p-2 shadow rounded' placeholder='Password'/>

                            <div className='inline-flex my-2 justify-between my-2'>
                                <input type='number' minLength='10' maxLength='10' id='mobile' name='mobile'  className='mr-2 p-2 shadow rounded' placeholder='Mobile No.' />
                                <input type='text' required id='country' name='country'  className='ml-2 p-2 shadow rounded' placeholder='Country' />
                            </div>
                            <input type='text' required id='farm' name='farm' className='my-2 p-2 shadow rounded' placeholder='Farm Name'/>

                        </section>

                        <div className='inline-flex mt-3 pt-2 justify-center'>
                                <button type='submit' 
                                    className='w-half bg-blue-400 hover:bg-blue-500 text-white font-bold rounded p-2'>
                                    Register
                                </button>
                        </div>

                    </form>
                </span>
            </div>
    )
}

