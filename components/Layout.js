import React from 'react'
import Navbar from './Navbar'
import AnnouncementBar from './AnnouncementBar'
import Footer from './Footer'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Chicago Craft Club</title>
        <meta name="description" content="A group for anyone in Chicago (or around Chicago) who is interested in crafting!" />
        <meta itemProp="name" content="Chicago Craft Club" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@500;600;900&display=swap" rel="stylesheet" />

      </Head>
      <AnnouncementBar />
      {/* <Navbar /> */}
      <main className="container-fluid m-0 p-0">
        {children}
      </main>
      <Footer />
    </>
  )
}
