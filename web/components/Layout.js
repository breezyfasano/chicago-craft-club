import React from 'react'
import Navbar from './Navbar'
import AnnouncementBar from './AnnouncementBar'

export default function Layout({children}) {
  return (
    <>
    <AnnouncementBar />
    <Navbar />
    <main className="container">
      {children}
    </main>
    </>
  )
}
