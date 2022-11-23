import ILinkProps from "../../interfaces/link-props"
import cn from "../../lib/class-names"
import BaseLink from "./base-link"

export const BUTTON_CLS = `justify-center font-semibold text-sm color-ani`

export default function ButtonLink({
  href,
  ariaLabel,
  underline,
  onMouseEnter,
  onMouseLeave,
  className,
  children,
}: ILinkProps) {
  return (
    <BaseLink
      href={href}
      underline={underline}
      ariaLabel={ariaLabel}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={cn(BUTTON_CLS, className)}
    >
      {children}
    </BaseLink>
  )
}

//font-medium bg-blue-600 hover:bg-blue-500 text-white shadow-md rounded px-5 py-3 trans-ani"
