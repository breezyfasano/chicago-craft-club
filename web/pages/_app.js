import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  import("bootstrap/dist/js/bootstrap");
  return <Component {...pageProps} />
}

export default MyApp
