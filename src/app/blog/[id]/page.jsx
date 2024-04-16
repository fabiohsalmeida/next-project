import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

export default function BlogPost() {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.info}>
                    <h1 className={styles.title}>
                        Lorem ipsum dolor sit amet
                    </h1>
                    <p className={styles.description}>

                    </p>
                    <div className={styles.author}>
                        <Image
                            src="https://images.pexels.com/photos/17070821/pexels-photo-17070821/free-photo-of-natureza-sentado-grama-animais.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt=""
                            width={40}
                            height={40}
                            className={styles.avatar}
                        />
                        <span className={styles.username}>John Doe</span>
                    </div>
                </div>
                <div className={styles.imageContainer}>
                    <Image
                        src="https://images.pexels.com/photos/20922645/pexels-photo-20922645/free-photo-of-neve-panorama-vista-paisagem.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                        fill={true}
                        className={styles.image}
                    />
                </div>
            </div>
            <div className={styles.content}>
                <p className={styles.text}>
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed tincidunt porttitor justo, sed accumsan arcu gravida in. Etiam bibendum tincidunt nisl, ut laoreet tortor sodales ut. Cras lobortis a orci dignissim malesuada. Nunc vel arcu orci. Sed sapien est, euismod sit amet blandit vel, consectetur eu odio. Nullam ullamcorper interdum sapien vitae fringilla. Suspendisse potenti. Donec lobortis sem non dolor accumsan, at varius nibh condimentum. Nullam at lacinia risus. Cras tellus nunc, suscipit et ornare in, scelerisque et leo. Ut luctus enim eu laoreet vulputate. Donec facilisis non tellus non bibendum. Aenean nec arcu nec erat euismod facilisis vel eu lectus. Phasellus pretium ligula vel urna pulvinar ultricies.
                    <br />
                    <br />
                    Sed semper, nisl a ornare auctor, nulla felis tristique dui, vel viverra massa magna nec velit. Etiam imperdiet mollis augue et eleifend. Duis rhoncus ipsum quis interdum viverra. Nam in lacus ac magna euismod cursus id ut tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris interdum maximus nulla, et consectetur mi sodales in. Cras in dignissim magna, id venenatis felis. Aliquam aliquet porta rhoncus. Curabitur volutpat facilisis mauris sed eleifend. Suspendisse egestas urna massa, eget varius elit mattis et. Sed lobortis pellentesque nisi quis consequat.
                    <br />
                    <br />
                    In suscipit leo ut eros sollicitudin auctor. Aenean tempus felis ut egestas tristique. Donec aliquet enim augue, non maximus ligula suscipit sit amet. Duis eget diam dignissim, venenatis nisl tristique, bibendum ligula. Aenean pellentesque lobortis bibendum. Mauris tellus tortor, imperdiet nec nisl in, sollicitudin egestas odio. Ut venenatis ex libero, vel porta sapien pretium non. Etiam rutrum, nunc ut suscipit luctus, nibh libero porta sapien, non tempus diam elit facilisis orci. Etiam mattis urna enim, vel faucibus metus porta sed. Mauris suscipit ac justo quis mollis. In a cursus dui. Ut varius mattis metus, at cursus ex hendrerit vitae. Nam non facilisis ligula. Nam quis risus hendrerit est tristique rutrum a eu tellus.
                </p>
            </div>
        </div>
    )
}