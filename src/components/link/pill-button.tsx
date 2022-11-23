import cn from "../../lib/class-names"
import Button, { IButtonProps } from "./button"
import { PILL_BUTTON_LINK_CLS } from "./pill-button-link"

export default function PillButton({
  onClick,
  ariaLabel,
  className,
  style,
  children,
}: IButtonProps) {
  return (
    <Button
      onClick={onClick}
      ariaLabel={ariaLabel}
      className={cn(PILL_BUTTON_LINK_CLS, className)}
      style={style}
    >
      {children}
    </Button>
  )
}

//font-medium bg-blue-600 hover:bg-blue-500 text-white shadow-md rounded px-5 py-3 trans-ani"
