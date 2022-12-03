import Head from 'next/head'
import { Banner } from '../components/Banner'
import { Footer } from '../components/footer'
import { HeaderHome } from '../components/HeaderHome'
import { Trending } from '../components/Trending'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <HeaderHome />
      <Banner />
      <Trending />
      <Footer />
    </div>
  )
}
