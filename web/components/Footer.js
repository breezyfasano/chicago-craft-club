import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6">
            Copyright Chicago Craft Club 2022. Website by Breezy Fasano.
          </div>
          <div className="col-12 col-lg-6">
          <ul className="socialsList">
                <li>
                  <a href="https://www.facebook.com/groups/1233181850502151" target="_blank" rel="nofollow"><Image src="/icons/black/facebook-black.svg" width={30} height={30} alt="Facebook"></Image></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/chicagocraftingclub/" target="_blank" rel="nofollow"><Image src="/icons/black/instagram-black.svg" width={30} height={30} alt="Instagram"></Image></a>
                </li>
                <li>
                  <a href="https://discord.gg/ekJwuzzF3T" target="_blank" rel="nofollow"><Image src="/icons/black/discord-black.svg" width={30} height={30} alt="Discord"></Image></a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@chicagocraftclub" target="_blank" rel="nofollow"><Image src="/icons/black/tiktok-black.svg" width={30} height={30} alt="Tiktok"></Image></a>
                </li>
              </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
