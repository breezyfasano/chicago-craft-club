import React from 'react'
import Navbar from './Navbar'
import AnnouncementBar from './AnnouncementBar'
import Footer from './Footer'

export default function Layout({children}) {
  return (
    <>
    <AnnouncementBar />
    {/* <Navbar /> */}
    <main className="container-fluid m-0 p-0">
      {children}
    </main>
    <Footer />
    </>
  )
}
