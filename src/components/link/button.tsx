import IAriaProps from "../../interfaces/aria-props"
import IChildrenProps from "../../interfaces/children-props"
import IMouseProps from "../../interfaces/mouse-props"
import cn from "../../lib/class-names"
import { BASE_LINK_CLS } from "./base-link"
import { BUTTON_CLS } from "./button-link"

export interface IButtonProps extends IChildrenProps, IAriaProps, IMouseProps {}

export default function Button({
  onClick,
  onMouseEnter,
  onMouseLeave,
  onMouseDown,
  onMouseUp,
  ariaLabel,
  className,
  style,
  children,
}: IButtonProps) {
  return (
    <button
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      aria-label={ariaLabel}
      className={cn(BASE_LINK_CLS, BUTTON_CLS, className)}
      style={style}
    >
      {children}
    </button>
  )
}
