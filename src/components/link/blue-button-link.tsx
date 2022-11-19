import ILinkProps from "../../interfaces/link-props"
import cn from "../../lib/class-names"
import PillButtonLink from "./pill-button-link"

export const BLUE_BUTTON_CLASSES =
  "bg-blue-600 hover:bg-blue-700 text-white px-4 py-2"

export default function BlueButtonLink({
  href,
  ariaLabel,
  underline,
  className,
  children,
}: ILinkProps) {
  return (
    <PillButtonLink
      href={href}
      ariaLabel={ariaLabel}
      className={cn(BLUE_BUTTON_CLASSES, className)}
      underline={underline}
    >
      {children}
    </PillButtonLink>
  )
}
