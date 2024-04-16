import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Blog() {
    return (
        <div className={styles.mainContainer}>
            <Link href="blog/testId" className={styles.container}>
                <div className={styles.imageContainer}>
                    <Image
                        src="https://images.pexels.com/photos/17290327/pexels-photo-17290327/free-photo-of-escadas-degraus-leve-luz.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                        width={300}
                        height={400}
                        className={styles.image}
                    />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.description}>Description</p>
                </div>
            </Link>
            <Link href="blog/testId" className={styles.container}>
                <div className={styles.imageContainer}>
                    <Image
                        src="https://images.pexels.com/photos/20882949/pexels-photo-20882949/free-photo-of-mulher-verao-arbusto-moita.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                        width={300}
                        height={400}
                        className={styles.image}
                    />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.description}>Description</p>
                </div>
            </Link>
        </div>

    )
}