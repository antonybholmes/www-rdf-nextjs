import { useState } from "react"
import ILinkProps from "../../interfaces/link-props"
import cn from "../../lib/class-names"
import ArrowButtonLink from "./arrow-button-link"
import { BLUE_BUTTON_CLS } from "./blue-button-link"

export default function BlueButtonArrowLink({
  href,
  ariaLabel,
  className,
  children,
}: ILinkProps) {
  const [hover, setHover] = useState(false)

  return (
    <ArrowButtonLink
      href={href}
      className={cn(BLUE_BUTTON_CLS, className)}
      ariaLabel={ariaLabel}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </ArrowButtonLink>
  )
}
