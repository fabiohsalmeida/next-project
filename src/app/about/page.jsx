import React from 'react'
import styles from './page.module.css'
import Image from 'next/image';
import Button from '@/components/Button/Button';

export default function About() {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image 
                    src="https://images.pexels.com/photos/2041627/pexels-photo-2041627.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    fill={true}
                    alt=""
                    className={styles.img}
                />
                <div className={styles.imgText}>
                    <h1 className={styles.imgTitle}>Digital Storytellers</h1>
                    <h2 className={styles.imgDescription}>Handcrafting award winning digital experiences</h2>
                </div>
            </div>
            <div className={styles.textContainer}>
                <div className={styles.item}>
                    <h1 className={styles.title}>Who Are We?</h1>
                    <p className={styles.description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla,
                        urna in congue ultrices, magna sapien maximus nunc, ac commodo neque velit
                        eu quam. Etiam malesuada egestas cursus. Phasellus mattis ipsum sed cursus
                        sollicitudin. Ut egestas aliquam interdum. Suspendisse at volutpat libero.
                        Vestibulum metus dolor, elementum ut elit auctor, mollis eleifend lorem.
                        <br />
                        <br />
                        Phasellus at rhoncus mauris. Phasellus id neque dignissim, tempor purus non,
                        fermentum metus. Phasellus dictum purus nec nibh luctus, in faucibus velit
                        pellentesque. Etiam vel felis a nisl tincidunt consectetur nec vel ligula.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                </div>
                <div className={styles.item}>
                    <h1 className={styles.title}>What We Do?</h1>
                    <p className={styles.description}>
                        Phasellus at rhoncus mauris. Phasellus id neque dignissim, tempor purus non,
                        fermentum metus. Phasellus dictum purus nec nibh luctus, in faucibus velit
                        pellentesque. Etiam vel felis a nisl tincidunt consectetur nec vel ligula.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        <br />
                        <br />
                        - Dynamic Websites
                        <br />
                        <br />
                        - Fast and Handy
                        <br />
                        <br />
                        - Mobile Apps
                    </p>
                    <Button url="contact" text="Contact"></Button>
                </div>
            </div>
        </div>
    )
}