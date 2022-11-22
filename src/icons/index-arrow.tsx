import { useEffect, useRef } from "react"
import IconProps from "../interfaces/icon-props"
import { gsap } from "gsap"

interface IProps extends IconProps {
  selected?: boolean
}

export default function IndexArrow({ selected = false, className }: IProps) {
  const lineRef = useRef(null)
  const arrowRef = useRef(null)

  useEffect(() => {
    // if (typeof window !== "undefined") {
    //   gsap.registerPlugin(ScrollTrigger)
    // }

    gsap
      .timeline()
      .to(
        arrowRef.current,
        {
          x: selected ? "2px" : 0,

          duration: 0.1,
        },
        0
      )
      .to(
        lineRef.current,
        {
          scaleX: selected ? 1 : 0,

          duration: 0.1,
        },
        0
      )
  }, [selected])

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      className={className}
      style={{ strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }}
    >
      <line ref={lineRef} x1="4" y1="8" x2="12" y2="8" />
      <path ref={arrowRef} d="M 6,3 L 11,8 L 6,13" />
    </svg>
  )
}
