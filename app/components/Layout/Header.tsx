import styles from '../../../styles/layout.module.css';
import Image from 'next/image'
import Link from 'next/link'
import Button from '../Button'
import { links } from './links'
import { useRouter } from 'next/router'

interface LinkProps {
    title ?: string,
    link : string,
}

export default function Header() {
    const router = useRouter();

    return (
        <div className={styles.header}>
            <div onClick={() => router.push('/')} style={{cursor : "pointer", flexDirection : "row", display : "flex"}}>
                <Image src='/icon.png' alt={'avatar'} width={27} height={21}/>
                <div>BrainBattle</div>
            </div>
            <div className={styles.push} />
            {links.map((item : LinkProps, index) => 
                <Link href={item.link} key={index} style={{marginLeft: 10, marginRight: 10}}> {item.title} </Link>
            )}
            <Button borderColor='#09142F' bgColor='#09142F' color='#FFFFFF' onClick={() => router.push('/signup')}>Sign in / Register</Button>
        </div>
    )
}