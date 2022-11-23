import cn from "../../lib/class-names"

type CheckMarkProps = {
  selected: boolean
  hover: boolean
  className?: string
}

export default function CheckMark({
  selected,
  hover,
  className,
}: CheckMarkProps) {
  return (
    // <VCenterRow
    //   className={cn(
    //     BASE_BUTTON_CLASSES,
    //     "grow-0 overflow-hidden rounded border color-ani",
    //     [
    //       selected,
    //       "!border-blue-500 bg-blue-500 text-white",
    //       `bg-white ${
    //         hover ? "!border-blue-400" : "!border-gray-300"
    //       }`,
    //     ],
    //     className
    //   )}
    //   style={{ width: RADIO_SIZE, height: RADIO_SIZE }}
    // >
    //   {selected && (
    //     <CheckIcon
    //       className="w-3 stroke-white"
    //       style={{ strokeWidth: "4px" }}
    //     />
    //   )}
    // </VCenterRow>

    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("color-ani w-4.5 overflow-hidden rounded border-2", [
        selected,
        "border-blue-500 bg-blue-500",
        [hover, "border-blue-500", "border-gray-300"],
      ])}
      style={{ strokeLinecap: "round", strokeLinejoin: "round", fill: "none" }}
    >
      {selected && (
        <path d="M 6,18 L 14,25 L 26,8" className="stroke-white stroke-4" />
      )}
    </svg>
  )
}
