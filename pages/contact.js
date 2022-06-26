export default function Contact() {
    return (
            <div className='flex place-content-center h-xsc bg-green-50 text-gray-900'>
                <span className=''>
                    <form action ='contact' method='post' className='inline-flex drop-shadow-lg shadow flex-col bg-blue-200 rounded py-4 px-6 mt-10'>
                        <p className='inline-flex justify-center bg-green-300 p-2 mb-4 mx-2 text-gray-800 rounded shadow w-1/3'>
                            Contact Us
                        </p>
                        
                        <section id="feedback" className='inline-flex flex-col'>
                            <span className="flex">
                                <input type='text' required id='name' name='name' className='my-2 p-2 mx-2 shadow rounded' placeholder='Name'/>
                                <input type='text' required id='email' name='email' className='my-2 p-2 mx-2 shadow rounded' placeholder='Email'/>
                            </span>
                            <textarea id="content" name="content" className='my-2 p-2 mx-2 shadow rounded' rows="10" cols="30" placeholder="Write here..." />

                        </section>

                        
                        <div className='inline-flex mt-3 pt-2 justify-center'>
                                <button type='submit' 
                                    className='w-half bg-blue-400 hover:bg-blue-500 text-white font-bold rounded p-2'>
                                    Send Feedback
                                </button>
                        </div>

                    </form>
                </span>
            </div>
    )
}