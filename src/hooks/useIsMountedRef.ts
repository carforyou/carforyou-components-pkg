import { useEffect, useRef } from "react"

const useIsMountedRef = () => {
  const isMountedRef = useRef<boolean>(null)

  useEffect(() => {
    isMountedRef.current = true
    return () => (isMountedRef.current = false)
  }, [isMountedRef])
  return isMountedRef
}

export default useIsMountedRef
