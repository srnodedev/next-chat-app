import styles from '../../../styles/layout.module.css';
import Image from 'next/image'
import Link from 'next/link'
import Button from '../Button'
import { useRouter } from 'next/router'
import IconUrl from '../../../public/icon.png'
import Card from '../Card'

interface LinkProps {
    title ?: string,
    link : string,
}

export default function Signup() {
    const router = useRouter();

    return (
        <Card style={{alignItems: "center"}}>
            <Button variant="primary" onClick={() => router.push('/signup')}>Sign in / Register</Button>
        </Card>
    )
}