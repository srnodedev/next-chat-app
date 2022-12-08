import Image from 'next/image'
import Layout from '../app/components/Layout'

// const myLoader = ({ src, width, quality }) => {
//   return `https://example.com/${src}?w=${width}&q=${quality || 75}`
// }

export default function Home() {
  return (
    <Layout title="BrainBattle | Dashboard">
      <Image 
        // loader={myLoader}
        blurDataURL='/image/back3.jpg'
        placeholder="blur"
        src="/image/back3.jpg"
        fill
        alt="Just..." />
    </Layout>
  )
}
