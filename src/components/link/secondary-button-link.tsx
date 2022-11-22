import ILinkProps from "../../interfaces/link-props"
import cn from "../../lib/class-names"
import OutlineRoundedButtonLink from "./outline-rounded-button-link"

export const SECONDARY_BUTTON_CLASSES = "px-3 py-1.5 text-xs border-gray-300"

export default function SecondaryButtonLink({
  href,
  ariaLabel,
  className,
  children,
}: ILinkProps) {
  return (
    <OutlineRoundedButtonLink
      href={href}
      ariaLabel={ariaLabel}
      className={cn(SECONDARY_BUTTON_CLASSES, className)}
    >
      {children}
    </OutlineRoundedButtonLink>
  )
}
