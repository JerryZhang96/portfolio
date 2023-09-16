import { useEffect, useState } from "react"

const useThemeSwitcher = () => {
  const preferDarkQuery = "(prefers-color-scheme: dark)"
  const [mode, setMode] = useState("")

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery)
    const userPref = window.localStorage.getItem("theme")

    const handleChange = () => {
      if (userPref) {
        let checkMode = userPref === "dark" ? "dark" : "light"

        setMode(checkMode)
        if (checkMode === "dark") {
          document.documentElement.classList.add("dark")
        } else {
          document.documentElement.classList.remove("dark")
        }
      } else {
        let checkMode = mediaQuery.matches ? "dark" : "light"
        setMode(checkMode)
        if (checkMode === "dark") {
          document.documentElement.classList.add("dark")
        } else {
          document.documentElement.classList.remove("dark")
        }
      }
    }

    handleChange()

    mediaQuery.addEventListener("change", handleChange)

    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  useEffect(() => {
    if (mode === "dark") {
      window.localStorage.setItem("theme", "dark")
      document.documentElement.classList.add("dark")
    }
    if (mode === "light") {
      window.localStorage.setItem("theme", "light")
      document.documentElement.classList.remove("dark")
    }
  }, [mode])

  return [mode, setMode]
}

export default useThemeSwitcher
