import { useCallback, useState } from "react"

function useRefWithEffect<T>(
  defaultValue: T = null
): [T, (element: T) => void] {
  const [node, setNode] = useState<T>(defaultValue)
  const ref = useCallback((element: T) => {
    if (element !== null) {
      setNode(element)
    }
  }, [])

  return [node, ref]
}

export default useRefWithEffect
