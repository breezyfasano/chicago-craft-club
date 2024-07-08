import Navbar from './Navbar'
import Footer from './Footer'
import Head from 'next/head'

type LayoutProps = {
  children: React.ReactNode
  pageClass?: string
}

export default function Layout({ children, pageClass }: LayoutProps) {
  return (
    <>
      <Head>
        <title>Chicago Craft Club</title>
        <meta
          name='description'
          content='A group for anyone in Chicago (or around Chicago) who is interested in crafting!'
        />
        <meta itemProp='name' content='Chicago Craft Club' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <Navbar />
      <main className={`m-0 p-0 ${pageClass}`}>{children}</main>
      <Footer />
    </>
  )
}
