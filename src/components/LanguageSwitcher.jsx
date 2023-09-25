import { useRouter } from "next/router"
import Dropdown from "react-dropdown"
import "react-dropdown/style.css" // for basic styling

import languageDetector from "@/lib/languageDetector"

const LanguageSwitcher = () => {
  const router = useRouter()

  const options = [
    { value: "en", label: "English" },
    { value: "zh", label: "Chinese" },
  ]

  const handleLanguageChange = (selectedOption) => {
    const locale = selectedOption.value

    let href = router.asPath
    let pName = router.pathname

    Object.keys(router.query).forEach((k) => {
      if (k === "locale") {
        pName = pName.replace(`[${k}]`, locale)
        return
      }
      pName = pName.replace(`[${k}]`, router.query[k])
    })

    if (locale) {
      href = `${pName}`
      router.push(href) // navigate to the selected language page
    }

    languageDetector.cache(locale) // cache the selected language
  }

  return (
    <Dropdown
      className="ml-2"
      options={options}
      onChange={handleLanguageChange}
      value={options.find((option) => option.value === router.query.locale)}
    />
  )
}

export default LanguageSwitcher
