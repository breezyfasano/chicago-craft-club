import React from 'react'
import Link from 'next/link'


export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <Link href="/"><li className="nav-item"><a className="nav-link">Home</a></li></Link>
          <Link href="/about"><li className="nav-item"><a className="nav-link">About us</a></li></Link>
          <Link href="/events"><li className="nav-item"><a className="nav-link">Events</a></li></Link>
          <Link href="/directory"><li className="nav-item"><a className="nav-link">Directory</a></li></Link>
          <Link href="/gallery"><li className="nav-item"><a className="nav-link">Gallery</a></li></Link>
        </ul>
      </div>
    </nav>
  )
}
