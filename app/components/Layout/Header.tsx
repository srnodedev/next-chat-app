import styles from './layout.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Button from '../Button'
import { links } from './links'

interface LinkProps {
    title ?: string,
    link : string,
}

export default function Header() {
    return (
        <div className={styles.header}>
            <Image src='/icon.png' alt={'avatar'} width={27} height={21} />
            <div>BrainBattle</div>
            <div className={styles.push} />
            {links.map((item : LinkProps, index) => 
                <Link href={item.link} key={index} style={{marginLeft: 10, marginRight: 10}}> {item.title} </Link>
            )}
            <Button >Sign in / Register</Button>
        </div>
    )
}