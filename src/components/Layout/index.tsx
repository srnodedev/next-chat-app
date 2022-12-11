import Header from './Header';
import Head from 'next/head';
import Image from 'next/image';
import { ReactChild } from 'react';
import styles from '../../../styles/layout.module.css';
import background from '../../../public/image/back3.jpg'

interface LayoutProps {
    children: ReactChild,
    title ?: string
}

export default function Layout({title, children}: LayoutProps){
    return(
        <>
        <div className={styles.container}>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Generated by BrainBattle" />
                <link rel="icon" href='/icon.png' />
            </Head>
    
            <main className={styles.main}>
                {/* <Image 
                    // loader={myLoader}
                    placeholder="blur"
                    quality={75}
                    src={background}
                    fill
                    alt="Just..."
                    style={{
                    objectFit: 'cover',
                    }} /> */}
                <Header />
                {children}
            </main>
        </div>
        </>
    )
}