import { MouseEventHandler } from "react"

export default interface IMouseProps {
  onClick?: MouseEventHandler
  onMouseEnter?: MouseEventHandler
  onMouseLeave?: MouseEventHandler //(e: React.MouseEvent<HTMLElement, MouseEvent>) => void
  onMouseDown?: MouseEventHandler //(e: React.MouseEvent<HTMLElement, MouseEvent>) => void
  onMouseUp?: MouseEventHandler //(e: React.MouseEvent<HTMLElement, MouseEvent>) => void
}
