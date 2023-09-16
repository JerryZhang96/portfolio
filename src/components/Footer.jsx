import React from "react"
import { useTranslation } from "next-i18next"

import Layout from "./Layout"

const Footer = () => {
  const { t } = useTranslation("common")

  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>
          {new Date().getFullYear()} &copy; {t("footer.copyright")}
        </span>
      </Layout>
    </footer>
  )
}

export default Footer
