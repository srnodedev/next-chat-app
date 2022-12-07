import styles from './layout.module.css'
import Image from 'next/image'

export default function Header() {
    return (
        <div className={styles.header}>
            <Image src='/icon.png' alt={'avatar'} width={27} height={21} />
        </div>
    )
}