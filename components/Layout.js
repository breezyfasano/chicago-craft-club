import React from 'react'
import Navbar from './Navbar'
import AnnouncementBar from './AnnouncementBar'
import Footer from './Footer'
import Head from 'next/head'
import Script from 'next/script'

export default function Layout({ children, pageClass }) {
  return (
    <>
      <Head>
        <title>Chicago Craft Club</title>
        <meta
          name='description'
          content='A group for anyone in Chicago (or around Chicago) who is interested in crafting!'
        />
        <meta itemProp='name' content='Chicago Craft Club' />
      </Head>
      <AnnouncementBar />
      <Navbar />
      <main className={`m-0 p-0 ${pageClass}`}>{children}</main>
      <Footer />
      <Script
        src='https://kit.fontawesome.com/486fda9fef.js'
        crossOrigin='anonymous'
      ></Script>
    </>
  )
}
