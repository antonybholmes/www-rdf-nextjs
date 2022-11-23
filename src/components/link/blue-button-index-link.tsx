import { useState } from "react"
import IndexArrow from "../../icons/index-arrow"
import ILinkProps from "../../interfaces/link-props"
import cn from "../../lib/class-names"
import BlueButtonLink from "./blue-button-link"

export default function BlueButtonIndexLink({
  href,
  ariaLabel,
  className,
  children,
}: ILinkProps) {
  const [hover, setHover] = useState(false)

  return (
    <BlueButtonLink
      href={href}
      className={cn("text-sm font-medium", className)}
      ariaLabel={ariaLabel}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {children}

      <IndexArrow className="w-4 stroke-white stroke-2" selected={hover} />
    </BlueButtonLink>
  )
}
