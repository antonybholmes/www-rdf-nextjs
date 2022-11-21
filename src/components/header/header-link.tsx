import { useState } from "react"
import ILink from "../../interfaces/link"
import cn from "../../lib/class-names"
import BaseLink from "../link/base-link"
import VCenterCol from "../v-center-col"

const BAR_WIDTH = "2px"

export const LINK_CLS =
  "flex flex-row items-center justify-center relative whitespace-nowrap color-ani px-4 py-2 rounded-lg border-2 border-transparent"

type IProps = {
  link: ILink
  selected: boolean
  onClick?: any
  headerMode?: string
}

export default function HeaderLink({
  link,
  selected,
  onClick,
  headerMode = "light",
}: IProps) {
  const [hover, setHover] = useState(false)
  const [down, setDown] = useState(false)

  return (
    <VCenterCol className="relative h-16 justify-center">
      <BaseLink
        href={link.url}
        ariaLabel={`View ${link.name}`}
        className={cn(LINK_CLS, [
          selected,
          " text-blue-600",
          [
            hover,
            [[down, "border-blue-600"], "bg-gray-100 text-gray-900"],
            "text-gray-600",
          ],
        ])}
        onClick={onClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onMouseDown={() => setDown(true)}
        onMouseUp={() => setDown(false)}
      >
        {link.name}
      </BaseLink>

      {selected && (
        <div
          className={cn("absolute bottom-0 w-full bg-blue-600")}
          style={{ height: BAR_WIDTH }}
        />
      )}
    </VCenterCol>
  )
}
