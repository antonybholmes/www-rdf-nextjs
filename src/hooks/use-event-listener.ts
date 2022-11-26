import { useEffect } from "react"

export default function useEventListener(
  object: any,
  event: string,
  callback: any
) {
  useEffect(() => {
    object.addEventListener(event, callback)
    return () => object.removeEventListener(event, callback)
  }, [])
}
