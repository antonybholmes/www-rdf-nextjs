import IconProps from "../interfaces/icon-props"

interface IProps extends IconProps {
  isPlus?: boolean
}

export default function PlusIcon({ isPlus = true, className, style }: IProps) {
  return (
    <svg
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{
        ...{ strokeLinecap: "round", strokeLinejoin: "round" },
        ...style,
      }}
    >
      <path d="M 4,8 L 12,8" />

      {isPlus && <path d="M 8,4 L 8,12" />}
    </svg>
  )
}
