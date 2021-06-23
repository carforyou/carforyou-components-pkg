import { useEffect, useState } from "react"

const useDebounce = (onChange, debounce, initialValue) => {
  const [event, setEvent] = useState(null)
  const value = event?.target?.value || initialValue
  useEffect(() => {
    if (event) {
      const timer = setTimeout(() => onChange(event), debounce)
      return () => clearTimeout(timer)
    }
  }, [value])

  return [value, setEvent]
}

export default useDebounce
