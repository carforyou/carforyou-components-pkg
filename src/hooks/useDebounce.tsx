import { useEffect, useState } from "react"

const useDebounce = (onChange, debounce) => {
  const [event, setEvent] = useState(null)
  const value = event?.target?.value || ""
  useEffect(() => {
    if (event) {
      const timer = setTimeout(() => onChange(event), debounce)
      return () => clearTimeout(timer)
    }
  }, [value])

  return [value, setEvent]
}

export default useDebounce
