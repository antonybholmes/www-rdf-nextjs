import { useState } from "react"
import cn from "../../lib/class-names"

// export const RADIO_SIZE = "18px"
// export const ORB_SIZE = "10px"
// export const ORB_OFFSET = "3px"

type RadioButtonProps = {
  index: number
  text: string
  selected: boolean
  onChange: any
}

export default function RadioButton({
  index,
  text,
  selected,
  onChange,
}: RadioButtonProps) {
  const [hover, setHover] = useState(false)

  function onMouseEnter(e: any) {
    setHover(true)
  }

  function onMouseLeave(e: any) {
    setHover(false)
  }

  return (
    <button
      onClick={() => onChange(text, index)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`flex w-full cursor-pointer flex-row items-center gap-x-2`}
    >
      {/* <div
          className={cn(
            `relative overflow-hidden rounded-full border bg-white`,
            [
              selected,
              "border-blue-500",
              cn("color-ani", [hover, "!border-blue-400", "!border-gray-300"]),
            ]
          )}
          style={{ width: RADIO_SIZE, height: RADIO_SIZE }}
        >
          {selected && (
            <div
              className="absolute rounded-full bg-blue-500"
              style={{
                width: ORB_SIZE,
                height: ORB_SIZE,
                left: ORB_OFFSET,
                top: ORB_OFFSET,
              }}
            />
          )}
        </div> */}

      <svg
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("color-ani w-4.5 overflow-hidden rounded-full border-2", [
          selected,
          "border-blue-500",
          [hover, "border-blue-400", "border-gray-300"],
        ])}
      >
        {selected && (
          <circle cx="16" cy="16" r="10" className="fill-blue-500" />
        )}
      </svg>

      <div className={`color-ani truncate`}>{text}</div>
    </button>
  )
}
