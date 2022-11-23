import cn from "../../lib/class-names"
import IUnderlineLinkProps from "../../interfaces/underline-link-props"
import BaseLink from "./base-link"

export default function ToBlueLink({
  href,
  ariaLabel,
  className,
  underline = false,
  children,
}: IUnderlineLinkProps) {
  return (
    <BaseLink
      href={href}
      ariaLabel={ariaLabel}
      underline={underline}
      className={cn(`color-ani hover:text-blue-600`, className)}
    >
      {children}
    </BaseLink>
  )
}
