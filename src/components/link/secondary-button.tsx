import { useEffect, useState } from "react"
import cn from "../../lib/class-names"
import { IButtonProps } from "./button"
import OutlineRoundedButton from "./outline-rounded-button"
import { SECONDARY_BUTTON_CLASSES } from "./secondary-button-link"

export default function SecondaryButton({
  onClick,
  ariaLabel,
  className,
  style,
  children,
}: IButtonProps) {
  const [hover, setHover] = useState(false)
  const [down, setDown] = useState(false)

  useEffect(() => {
    window.addEventListener("mouseup", onMouseUp)

    return () => {
      window.removeEventListener("mouseup", onMouseUp)
    }
  }, [])

  function onMouseUp() {
    setDown(false)
  }

  return (
    <OutlineRoundedButton
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onMouseDown={() => setDown(true)}
      ariaLabel={ariaLabel}
      className={cn(
        SECONDARY_BUTTON_CLASSES,
        "bg-gradient-to-b",
        [
          down,
          "from-gray-200 to-gray-50",
          [hover, "from-gray-50 to-gray-200", "from-gray-50 to-gray-100"],
        ],
        className
      )}
      style={style}
    >
      {children}
    </OutlineRoundedButton>
  )
}
