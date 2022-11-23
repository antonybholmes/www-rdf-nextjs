import IUnderlineLinkProps from "../../interfaces/underline-link-props"
import cn from "../../lib/class-names"
import ArrowLink from "./arrow-link"

export default function BlueArrowLink({
  href,
  ariaLabel,
  underline = false,
  className,
  children,
}: IUnderlineLinkProps) {
  return (
    <ArrowLink
      href={href}
      ariaLabel={ariaLabel}
      underline={underline}
      className={cn("stroke-blue-500 text-blue-600", className)}
    >
      {children}
    </ArrowLink>
  )
}
