import React from "react"
import { useRouter } from "next/router"
import Dropdown from "react-dropdown"
import "react-dropdown/style.css"

const options = [
  { value: "en", label: "English" },
  { value: "zh", label: "Chinese" },
]

const LanguageSwitcher = () => {
  const router = useRouter()

  const onChange = (e) => {
    router.push(
      {
        pathname: router.pathname,
        query: router.query,
      },
      null,
      { locale: e.value }
    )
  }

  return (
    <Dropdown
      className="ml-2"
      options={options}
      onChange={onChange}
      value={router.locale}
    />
  )
}

export default LanguageSwitcher
