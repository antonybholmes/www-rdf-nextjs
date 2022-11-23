import ILinkProps from "../../interfaces/link-props"
import cn from "../../lib/class-names"
import PillButtonLink from "./pill-button-link"

export const COLOR_PILL_BUTTON_CLS = "text-white px-3 py-1.5 text-sm"

export default function ColorPillButtonLink({
  href,
  ariaLabel,
  underline,
  onMouseEnter,
  onMouseLeave,
  className,
  children,
}: ILinkProps) {
  return (
    <PillButtonLink
      href={href}
      ariaLabel={ariaLabel}
      className={cn(COLOR_PILL_BUTTON_CLS, className)}
      underline={underline}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </PillButtonLink>
  )
}
