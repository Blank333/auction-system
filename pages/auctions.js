import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'

export default function auctions() {
    return (
        <Layout>
            <div className={styles.container}>
                

                <h1 className={styles.main}>Auctions here
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