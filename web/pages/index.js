import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
     <main>
       <header>
         <div className="announcement-bar">
          Announcement bar text here yassss
         </div>
         <nav>
           <ul>
             <li>Events</li>
             <li>About Us</li>
             <li>Directory</li>
             <li>Gallery</li>
           </ul>
         </nav>
         <h1>Chicago Craft Club</h1>
       </header>
    </main>
  )
}
