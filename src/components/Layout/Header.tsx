import Image from 'next/image'
import Link from 'next/link'
import Button from '../Button'
import { links } from './links'
import { useRouter } from 'next/router'
import IconUrl from '../../../public/icon.png'

interface LinkProps {
    title ?: string,
    link : string,
}

export default function Header() {
    const router = useRouter();

    return (
        <div className="min-w-full pl-5 pr-5 pt-9 pb-9 flex flex-row items-center h-20 box-shadow-header">
            <div onClick={() => router.push('/')} style={{cursor : "pointer", flexDirection : "row", display : "flex"}}>
                <Image src={IconUrl} alt={'avatar'} width={27} height={21}/>
                <div>BrainBattle</div>
            </div>
            <div className="ml-auto" />
            <div className="hidden md:flex">
            {links.map((item : LinkProps, index) => 
                <Link href={item.link} key={index} className="ml-4 mr-4"> {item.title} </Link>
            )}
            </div>
            <Button variant="primary" onClick={() => router.push('/signup')}>Sign in / Register</Button>
        </div>
    )
}