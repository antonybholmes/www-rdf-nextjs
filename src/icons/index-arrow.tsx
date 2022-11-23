import { gsap } from "gsap"
import { useEffect, useRef } from "react"
import IconProps from "../interfaces/icon-props"

const DURATION = 0.2

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
          duration: DURATION,
        },
        0
      )
      .to(
        lineRef.current,
        {
          scaleX: selected ? 1 : 0,
          duration: DURATION,
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
      <line ref={lineRef} x1="4" y1="9" x2="12" y2="9" />
      <path ref={arrowRef} d="M 6,5 L 10,9 L 6,13" />
    </svg>
  )
}
