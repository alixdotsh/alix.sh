import { useEffect, useState } from "react"

const useWindowSize = () => {
  const [size, setSize] = useState({ height: 0, width: 0 })

  useEffect(() => {
    if (typeof window == undefined)
      return

    const onResize = () => {
      setSize({
        height: window.innerHeight,
        width: window.innerWidth
      })  
    }

    onResize()

    window.addEventListener("resize", onResize)

    return () => window.removeEventListener("resize", onResize)
  }, [])

  return size
}

export default useWindowSize