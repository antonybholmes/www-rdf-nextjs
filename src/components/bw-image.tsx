import { useState } from "react"
import IClassProps from "../interfaces/class-props"
import BaseImage from "./base-image"

interface ImageProps extends IClassProps {
  src: string
  extZoom?: any
  alt: string
  onMouseEnter?: any
  onMouseLeave?: any
  colorMode?: boolean
  width?: number
  height?: number
}

export default function BWImage({
  src,
  extZoom,
  alt,
  className,
  onMouseEnter,
  onMouseLeave,
  colorMode = true,
  width = 640,
  height = 480,
}: ImageProps) {
  const [hover, setHover] = useState(false)

  //const photoEl = useRef(null)

  // useEffect(() => {
  //   gsap
  //     .timeline()
  //     .to(
  //       photoEl.current,
  //       0,
  //       { opacity: extZoom ? 1 : 0.9, ease: "power3.inOut" },
  //       0
  //     )
  //     .to(
  //       photoEl.current,
  //       0.5,
  //       {
  //         filter: extZoom ? "grayscale(0)" : "grayscale(1)",
  //         ease: "power3.inOut",
  //       },
  //       0
  //     )
  // }, [extZoom])

  function handleMouseEnter(e: any) {
    setHover(true)

    if (onMouseEnter) {
      onMouseEnter(e)
    }
  }

  function handleMouseLeave(e: any) {
    setHover(false)

    if (onMouseLeave) {
      onMouseLeave(e)
    }
  }

  return (
    <BaseImage
      src={src}
      style={{
        filter: `grayscale(${colorMode && (extZoom || hover) ? "0" : "1"})`,
        transition: "all 0.3s ease-in-out",
      }}
      className={className}
      alt={alt}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      width={width}
      height={height}
    />
  )
}
