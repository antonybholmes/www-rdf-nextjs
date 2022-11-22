import { useEffect, useRef, useState } from "react"
import ChevronRightIcon from "../../icons/chevron-right"
import IUnderlineLinkProps from "../../interfaces/underline-link-props"
import cn from "../../lib/class-names"
import BaseLink from "./base-link"
import { gsap } from "gsap"
import IndexArrow from "../../icons/index-arrow"

export default function IndexLink({
  href,
  ariaLabel,
  underline = false,
  className,
  children,
}: IUnderlineLinkProps) {
  const [hover, setHover] = useState(false)

  const iconEl = useRef(null)

  useEffect(() => {
    gsap
      .timeline()
      .to(
        iconEl.current,
        { x: hover ? "0.15rem" : 0, ease: "power3.out", duration: 0.2 },
        0
      )
  }, [hover])

  function _handleMouseEnter(e: any) {
    setHover(true)
  }

  function _handleMouseLeave(e: any) {
    setHover(false)
  }

  return (
    <BaseLink
      href={href}
      ariaLabel={ariaLabel}
      onMouseEnter={_handleMouseEnter}
      onMouseLeave={_handleMouseLeave}
      underline={underline}
      className={cn("flex flex-row gap-x-1", className)}
    >
      {children}

      <IndexArrow selected={hover} className="w-4 stroke-2" />
    </BaseLink>
  )
}
