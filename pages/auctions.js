import Image from 'next/image'
import Layout from '../components/layout'
import Link from 'next/link'

export default function auctions() {
    return (
        <Layout>
            <div className='container'>
                

                <h1 className='container'>
                    <Link href = '/auctions/Royal'>
                        <a className=''>
                            Royal
                        </a>
                    </Link>
                    <br />
                    <Image 
                        src = '/images/apple.jpg'
                        height = {360}
                        width = {480}
                        alt = "apple"
                    />
                </h1>
            </div>
        </Layout>

    )
}