import cn from "../../lib/class-names"
import { BLUE_BUTTON_CLS } from "./blue-button-link"
import Button, { IButtonProps } from "./button"
import { COLOR_BUTTON_CLS } from "./color-button-link"

export default function BlueButton({
  onClick,
  ariaLabel,
  style,
  className,
  children,
}: IButtonProps) {
  return (
    <Button
      ariaLabel={ariaLabel}
      onClick={onClick}
      className={cn(COLOR_BUTTON_CLS, BLUE_BUTTON_CLS, className)}
      style={style}
    >
      {children}
    </Button>
  )
}
