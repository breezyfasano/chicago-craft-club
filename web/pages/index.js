import Head from 'next/head'
import Image from 'next/image';
import Layout from '../components/Layout'
import styles from "/./styles/home.module.scss";

export default function Home() {
  return (
    <Layout>
      <header className={`${styles.header} container-fluid`}>

        <div className={`${styles.logoContainer}`}>
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-md-8">
              <div className={styles.hiImage}>
              <Image src="/logo-web.svg" width={450} height={450} alt="Chicago Craft Club"></Image>
              </div>
            </div>
            <div className="d-none d-md-block col-md-4">
              <Image src="/stars.svg" width={189} height={585} alt="Meet friends, do crafts, leave your home!"></Image>
            </div>
          </div>
        </div>
      </header>

      <section className={`${styles.intro} container my-5`}>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <div className="container-fluid">
              <div className="row">
                <div className="col-3 p-0 col-lg-2">
                  <Image src="/hi.svg" width={126} height={116} alt="hi!" />
                </div>
                <div className="col-9 col-lg-10">
                  <p>welcome to the chicago craft club. we’re a group of passionate artists and crafters from all over the creative spectrum living in the chicagoland area.</p>
                  <p>this group is about meeting fellow crafters that are passionate about crafting and community, learning from each other, and just plain ol’ hanging out.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.join} container-fluid`}>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <h1>how to join</h1>
              <p>The Chicago Craft Club is for <strong>everyone</strong> - regardless of disability, sexual orientation, gender identity, ethnicity, age, color, or origin. Plus, joining is just as simple as checking us out on the platform(s) of your choice!</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 d-flex justify-content-center mt-4">
              <ul className="socialsList">
                <li>
                  <a href="https://www.facebook.com/groups/1233181850502151" target="_blank" rel="nofollow"><Image src="/icons/facebook.svg" width={53} height={53} alt="Facebook"></Image></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/chicagocraftingclub/" target="_blank" rel="nofollow"><Image src="/icons/instagram.svg" width={53} height={53} alt="Instagram"></Image></a>
                </li>
                <li>
                  <a href="https://discord.gg/ekJwuzzF3T" target="_blank" rel="nofollow"><Image src="/icons/discord.svg" width={53} height={53} alt="Discord"></Image></a>
                </li>
                <li>
                  <a href="https://www.tiktok.com/@chicagocraftclub" target="_blank" rel="nofollow"><Image src="/icons/tiktok.svg" width={53} height={53} alt="Tiktok"></Image></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} container mt-5`}>
        <div className="row justify-content-center">
          <div className="col-12">
            <h1>from the club</h1>
          </div>
        </div>
      </section>

      <section className={`${styles.section} container mb-5`}>
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8">
            <p className={styles.callout}>do you have an idea for an event? interested in volunteering? have a business inquiry?</p>
            <p className={styles.callout}>please contact us at <a href="mailto:chicagocraftingclub@gmail.com">chicagocrafting&#8203;club@gmail.com</a> </p>
          </div>
        </div>
      </section>

    </Layout>
  )
}
