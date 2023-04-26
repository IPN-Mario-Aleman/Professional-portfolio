import Head from 'next/head'
import dynamic from 'next/dynamic'
// import Showcase from '@src/components/Home/Showcase'
const Layout = dynamic(() => import('@src/components/layout'))

const Work = dynamic(() => import('@src/components/Home/Work'))
const Hero = dynamic(() => import('@src/components/Home/Hero'))
const Showcase = dynamic(() => import('@src/components/Home/Showcase'))
const Personal = dynamic(() => import('@src/components/Home/Personal'))
const Banner = dynamic(() => import('@src/components/Banner'))
const Skills = dynamic(() => import('@src/components/Home/Skills'))
const CertificatePopUp = dynamic(() => import('@src/components/PopUp/CertificatePopUp'))

export default function Home () {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name='description' content='Portfolio professional frontend profile' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <Banner />
        <Hero />
        <Personal />
        <Skills />
        <Work />
        <Showcase />
        {/* <LastProject /> */}
        <CertificatePopUp />
      </Layout>
    </>
  )
}
