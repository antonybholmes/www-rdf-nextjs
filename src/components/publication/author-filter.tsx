import { useState } from "react"
import cn from "../../lib/class-names"

import ChevronRightIcon from "../../icons/chevron-right"
import { Journal } from "./journal-filter"

interface AuthorFilterProps {
  authors: [string, number][]
  selected: Set<string>
  onClick: any
  max: number
}

function AuthorFilter({
  authors,
  selected,
  onClick,
  max = 10,
}: AuthorFilterProps) {
  const [showAll, setShowAll] = useState(false)

  function onShowAll() {
    setShowAll(!showAll)
  }

  if (max > -1 && !showAll) {
    authors = authors.slice(0, max)
  }

  return (
    <div className="border-t border-gray-300 pt-4 text-sm">
      {/* <ToggleSwitch
        isSelected={showAll}
        onClick={onShowAll}
        className="font-medium"
      >
        Authors
      </ToggleSwitch> */}
      <button
        onClick={onShowAll}
        className="color-ani flex w-full flex-row items-center justify-between stroke-gray-500 hover:stroke-gray-900"
      >
        <h2 className="font-medium">Authors</h2>
        <ChevronRightIcon
          className={cn("rotate-ani w-3 stroke-2", [showAll, "rotate-90"])}
        />
      </button>
      <ul className="my-2 flex flex-col gap-y-1">
        {authors.map((journal: any, index: number) => {
          return (
            <Journal
              journal={journal}
              isSelected={selected.has(journal[0])}
              key={index}
              onClick={onClick}
            />
          )
        })}
      </ul>
      {/* <Button
        onClick={onShowAll}
        ariaLabel="Show more items"
        className={cn(BASE_BUTTON_CLS, "rotate-ani w-full", [
          showAll,
          "rotate-180",
        ])}
      >
        <ChevronDownIcon className="w-3 stroke-gray-500 stroke-2" />
      </Button> */}
    </div>
  )
}

export default AuthorFilter
