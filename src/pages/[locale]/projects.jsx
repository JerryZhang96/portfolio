import Head from "next/head"
import Image from "next/image"
import { useTranslation } from "next-i18next"
import { motion } from "framer-motion"

import project1 from "../../../public/images/projects/coinsdo.png"
import project2 from "../../../public/images/projects/merchant.png"
import project3 from "../../../public/images/projects/coinsend.png"
import project4 from "../../../public/images/projects/coinget.png"
import Layout from "@/components/Layout"
import Link from "@/components/Link"
import AnimatedText from "@/components/AnimatedText"
import { GithubIcon } from "@/components/Icons"
import { getStaticPaths, makeStaticProps } from "@/lib/getStatic"

const FramerImage = motion(Image)

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  const { t } = useTranslation("projects")

  return (
    <article className="relative flex items-center justify-between w-full p-12 border border-solid shadow-2xl rounded-br-2xl rounded-3xl border-dark bg-light dark:bg-dark dark:border-light lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] rounded-br-3xl bg-dark dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 overflow-hidden rounded-lg cursor-pointer lg:w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="flex flex-col items-start justify-between w-1/2 pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary dark:text-primaryDark xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="w-full my-2 text-4xl font-bold text-left dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="flex items-center mt-2">
          <Link
            href={link}
            target="_blank"
            className="p-2 px-6 text-lg font-semibold rounded-lg bg-dark text-light dark:bg-light dark:text-dark sm:px-4 sm:text-base"
          >
            {t("projects.actionVisitProject")}
          </Link>
          {github && (
            <Link href={github} target="_blank" className="w-10">
              <GithubIcon />
            </Link>
          )}
        </div>
      </div>
    </article>
  )
}

const Project = ({ type, title, img, link, github }) => {
  const { t } = useTranslation("projects")

  return (
    <article className="relative flex flex-col items-center justify-center w-full p-6 border border-solid rounded-2xl border-dark bg-light dark:bg-dark dark:border-light xs:p-4">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full overflow-hidden rounded-lg cursor-pointer"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <div className="flex flex-col items-start justify-between w-full mt-4">
        <span className="text-xl font-medium text-primary dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="w-full my-2 text-3xl font-bold text-left lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="flex items-center justify-between w-full mt-2">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline md:text-base"
          >
            {t("projects.actionVisit")}
          </Link>
          {github && (
            <Link href={github} target="_blank" className="w-8 md:w-6">
              <GithubIcon />
            </Link>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const { t } = useTranslation("projects")

  return (
    <>
      <Head>
        <title>{t("meta.title")}</title>
        <meta name="description" content={t("meta.description")} />
      </Head>
      <main className="flex flex-col items-center justify-center w-full dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text={t("heading")}
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type={t("projects.title1")}
                title={t("projects.itemT1")}
                summary={t("projects.itemC1")}
                img={project1}
                link="https://web.coinsdotest.com"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type={t("projects.title2")}
                title={t("projects.itemT2")}
                img={project2}
                link="https://merchant.coinsdotest.com"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type={t("projects.title2")}
                title={t("projects.itemT3")}
                img={project3}
                link="https://coinsend.coinsdotest.com"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type={t("projects.title2")}
                title={t("projects.itemT4")}
                img={project4}
                link="https://coinget.coinsdotest.com"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

const getStaticProps = makeStaticProps(["common", "projects"])

export { getStaticPaths, getStaticProps }
