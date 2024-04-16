import React from 'react'
import styles from './page.module.css'
import Button from '@/components/Button/Button'
import Image from 'next/image'

export default function PortfolioCategory({params}) {
    return (
        <div className={styles.container}>
            <h1 className={styles.categoryTitle}>{params.category}</h1>
            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.description}>Description</p>
                    <Button text="See More" url=""/>
                </div>
                <div className={styles.imgContainer}>
                    <Image 
                        className={styles.img}
                        fill={true}
                        src="https://images.pexels.com/photos/20484222/pexels-photo-20484222/free-photo-of-preto-e-branco-p-b-cidade-meio-urbano.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                    />
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.description}>Description</p>
                    <Button text="See More" url=""/>
                </div>
                <div className={styles.imgContainer}>
                    <Image 
                        className={styles.img}
                        fill={true}
                        src="https://images.pexels.com/photos/16248641/pexels-photo-16248641/free-photo-of-preto-e-branco-p-b-passaro-ave.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                    />
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.description}>Description</p>
                    <Button text="See More" url=""/>
                </div>
                <div className={styles.imgContainer}>
                    <Image 
                        className={styles.img}
                        fill={true}
                        src="https://images.pexels.com/photos/21404211/pexels-photo-21404211/free-photo-of-preto-e-branco-p-b-amor-eu-te-amo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}