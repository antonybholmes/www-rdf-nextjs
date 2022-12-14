import { useState } from "react"
import ChevronRightIcon from "../../icons/chevron-right"
import cn from "../../lib/class-names"
import CheckBox from "../link/check-box"
import VCenterRow from "../v-center-row"

interface JournalProps {
  journal: [string, number]
  isSelected: boolean
  onClick: any
}

export function Journal({ journal, isSelected, onClick }: JournalProps) {
  return (
    <li>
      <CheckBox
        onClick={() => onClick(journal[0], !isSelected)}
        isSelected={isSelected}
        className="w-full"
      >
        <VCenterRow className="w-full justify-between">
          <span>{journal[0]}</span>
          <span>({journal[1]})</span>
        </VCenterRow>
      </CheckBox>

      {/* <CheckBox onChange={() => onClick(journal[0], !selected)} selected={selected}>{`${useElipsis(journal[0])} (${journal[1]})`}</CheckBox> */}
    </li>
  )
}

interface JournalFilterProps {
  journals: [string, number][]
  selected: Set<string>
  onClick: any
  max: number
}

function JournalFilter({
  journals,
  selected,
  onClick,
  max = 10,
}: JournalFilterProps) {
  const [showAll, setShowAll] = useState(false)

  function onShowAll() {
    setShowAll(!showAll)
  }

  if (max > -1 && !showAll) {
    journals = journals.slice(0, max)
  }

  return (
    <div className="border-t border-gray-300 pt-4 text-sm">
      {/* <ToggleSwitch
        isSelected={showAll}
        onClick={onShowAll}
        className="text-sm font-medium"
      >
        Journals
      </ToggleSwitch> */}
      <button
        onClick={onShowAll}
        className="color-ani flex w-full flex-row items-center justify-between stroke-gray-500 hover:stroke-gray-900"
      >
        <h2 className="font-medium">Journals</h2>
        <ChevronRightIcon
          className={cn("rotate-ani w-3 stroke-2", [showAll, "rotate-90"])}
        />
      </button>
      <ul className="my-2 flex flex-col gap-y-1">
        {journals.map((journal: any, index: number) => {
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

export default JournalFilter
