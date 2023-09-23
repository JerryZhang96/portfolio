import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const Loading = () => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const path = router.basePath + router.asPath
    const handleStart = (url) => url !== path && setLoading(true)
    const handleComplete = (url) => url === path && setLoading(false)

    router.events.on("routeChangeStart", handleStart)
    router.events.on("routeChangeComplete", handleComplete)
    router.events.on("routeChangeError", handleComplete)

    return () => {
      router.events.off("routeChangeStart", handleStart)
      router.events.off("routeChangeComplete", handleComplete)
      router.events.off("routeChangeError", handleComplete)
    }
  }, [router])

  return (
    loading && (
      <div className="h-screen w-full flex justify-center items-center fixed top-0 left-0 z-10 bg-light dark:bg-dark">
        <div className="absolute h-[100px] w-[100px] my-0 mx-auto border-[6px] border-solid border-cyan-400/[.15] animate-spin" />
      </div>
    )
  )
}

export default Loading
