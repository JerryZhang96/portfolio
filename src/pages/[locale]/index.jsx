import Head from "next/head"
import Image from "next/image"
import { useTranslation } from "next-i18next"

import profilePic from "../../../public/images/profile/profile.png"
import Layout from "@/components/Layout"
import Link from "@/components/Link"
import AnimatedText from "@/components/AnimatedText"
import { LinkArrow } from "@/components/Icons"
import { getStaticPaths, makeStaticProps } from "@/lib/getStatic"

export default function Home() {
  const { t } = useTranslation("home")

  return (
    <>
      <Head>
        <title>{t("meta.title")}</title>
        <meta name="description" content={t("meta.description")} />
      </Head>
      <main className="flex items-center w-full min-h-screen text-dark dark:text-light">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="Chee Zhang"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="flex flex-col items-center self-center w-1/2 lg:w-full lg:text-center">
              <AnimatedText
                text={t("heading")}
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                {t("description")}
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/portfolio/resume.pdf"
                  target="_blank"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base"
                >
                  {t("resume")}
                  <LinkArrow className="!w-[30px] ml-1" />
                </Link>
                <Link
                  href="mailto:jerryzhang960605@gmail.com"
                  target="_blank"
                  className="ml-4 text-lg font-medium underline capitalize text-dark dark:text-light md:text-base"
                >
                  {t("contact")}
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

const getStaticProps = makeStaticProps(["common", "home"])

export { getStaticPaths, getStaticProps }
