import Document, { Html, Head, Main, NextScript } from "next/document"
import Script from "next/script"
import i18nextConfig from "../../next-i18next.config"

class MyDocument extends Document {
  render() {
    const currentLocale =
      this.props.__NEXT_DATA__.query.locale || i18nextConfig.i18n.defaultLocale
    return (
      <Html lang={currentLocale}>
        <Head />
        <body>
          <Script id="theme-switcher" strategy="beforeInteractive">
            {`
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark')
        } else {
          document.documentElement.classList.remove('dark')
        }`}
          </Script>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
