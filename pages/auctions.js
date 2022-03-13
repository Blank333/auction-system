import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function auctions() {
    return (
        <div className={styles.container}>
            

            <h1 className={styles.main}>Auctions here
                <Image 
                    src = '/images/apple.jpg'
                    height = {360}
                    width = {480}
                    alt = "apple"
                />
            </h1>

            <p className={styles.title}>
                <Link href = "/">
                    <a>Home</a>
                </Link>
            </p>
        </div>

    )
}