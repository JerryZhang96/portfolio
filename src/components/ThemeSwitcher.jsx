import React from "react"

import useThemeSwitcher from "@/hooks/useThemeSwitcher"
import { MoonIcon, SunIcon } from "./Icons"

const ThemeSwitcher = () => {
  const [mode, setMode] = useThemeSwitcher()

  return (
    <button
      onClick={() => setMode(mode === "light" ? "dark" : "light")}
      className={`flex items-center justify-center rounded-full p-1 ${
        mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
      }`}
    >
      {mode === "dark" ? (
        <SunIcon className="fill-dark" />
      ) : (
        <MoonIcon className="fill-dark" />
      )}
    </button>
  )
}

export default ThemeSwitcher
