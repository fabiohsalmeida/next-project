import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {revalidate: 10}
    });

    if(!res.ok) {
        throw new Error('Failed to fetch data')
    }

    return res.json();
}

export default async function Blog() {
    const data = await getData();
    
    return (
        <div className={styles.mainContainer}>
            {data.map((item) => (
                <Link href={`/blog/${item._id}`} className={styles.container} key={item.id}>
                    <div className={styles.imageContainer}>
                        <Image
                            src={"https://images.pexels.com/photos/17290327/pexels-photo-17290327/free-photo-of-escadas-degraus-leve-luz.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
                            alt=""
                            width={400}
                            height={250}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.content}>
                        <h1 className={styles.title}>{item.title}</h1>
                        <p className={styles.description}>{item.body}</p>
                    </div>
                </Link>
            ))}
        </div>
      );
}