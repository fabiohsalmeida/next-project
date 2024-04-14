"use client"
import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

export default function Footer() {
    console.log("CSR example");

    return (
        <div className={styles.container}>
            <div>©Outsider Developer. All rights reserved.</div>
            <div>
                <div className={styles.social}>
                    <Image src="/1.png" width={15} height={15} className={styles.icon} alt="Outsider Developer Facebook"/>
                    <Image src="/2.png" width={15} height={15} className={styles.icon} alt="Outsider Developer Instagram"/>
                    <Image src="/3.png" width={15} height={15} className={styles.icon} alt="Outsider Developer Twitter"/>
                    <Image src="/4.png" width={15} height={15} className={styles.icon} alt="Outsider Developer Youtube"/>
                </div>
            </div>
        </div>
    );
}