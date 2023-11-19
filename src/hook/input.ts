import { ChangeEvent, useState } from "react"

interface typeInputReturn {
  value: string,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export function useInput(initialValue = ''): typeInputReturn {
  const [value, setValue] = useState(initialValue)

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  return {
    value,
    onChange
  }
}