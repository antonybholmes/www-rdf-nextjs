import { useState } from "react"
import ILinkProps from "../../interfaces/link-props"
import cn from "../../lib/class-names"
import ArrowButtonLink from "./arrow-button-link"

export const PURPLE_BUTTON_CLS = "bg-indigo-500 hover:bg-slate-800"

export default function PurpleButtonArrowLink({
  href,
  ariaLabel,
  className,
  children,
}: ILinkProps) {
  const [hover, setHover] = useState(false)

  return (
    <ArrowButtonLink
      href={href}
      className={cn(PURPLE_BUTTON_CLS, className)}
      ariaLabel={ariaLabel}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}
    </ArrowButtonLink>
  )
}
