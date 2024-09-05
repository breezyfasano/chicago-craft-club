import Navbar from './Navbar'
import Footer from './Footer'
import Head from 'next/head'

type LayoutProps = {
  children: React.ReactNode
  pageClass?: string
  metaTitle?: string
  metaDescription?: string
}

export default function Layout({
  children,
  metaTitle = 'Chicago Craft Club',
  metaDescription = 'A group for anyone in Chicago (or around Chicago) who is interested in crafting!',
  pageClass,
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name='description' content={metaDescription} />
        <meta itemProp='name' content={`${metaTitle}`} />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <Navbar />
      <main className={`m-0 p-0 ${pageClass}`}>{children}</main>
      <Footer />
    </>
  )
}
