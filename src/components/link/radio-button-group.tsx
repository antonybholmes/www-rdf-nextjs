import { useState } from "react"
import RadioButton from "./radio-button"

interface RadioButtonGroupProps {
  items: string[]
  selected: string
  onChange: any
  className?: string
}

export default function RadioButtonGroup({
  items,
  selected,
  onChange,
  className,
}: RadioButtonGroupProps) {
  const [index, setIndex] = useState(selected)

  function handleChange(text: string, index: number) {
    setIndex(text)

    onChange(index)
  }

  return (
    <ul className={className}>
      {items.map((item: string, index: number) => {
        return (
          <li key={index}>
            <RadioButton
              key={index}
              text={item}
              index={index}
              selected={item === selected}
              onChange={handleChange}
            />
          </li>
        )
      })}
    </ul>
  )
}
