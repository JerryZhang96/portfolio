import "@/styles/globals.css"
import Head from "next/head"
import { Montserrat } from "next/font/google"
import { appWithTranslation } from "next-i18next"

import NavBar from "@/components/NavBar"
import Loading from "@/components/Loading"

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
        className={`${monstserrat.variable} relative font-mont bg-light dark:bg-dark w-full min-h-screen`}
      >
        <NavBar />
        <Loading />
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default appWithTranslation(App)
