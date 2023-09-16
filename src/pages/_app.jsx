import "@/styles/globals.css"
import Head from "next/head"
import { Montserrat } from "next/font/google"
import { appWithTranslation } from "next-i18next"

import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"

const monstserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",
})

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <main
        className={`${monstserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen`}
      >
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  )
}

export default appWithTranslation(App)
