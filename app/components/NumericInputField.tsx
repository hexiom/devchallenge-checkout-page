"use client"
import { FormEvent, InputHTMLAttributes, useCallback, useRef, useState } from "react";

export default function NumericInputField(props: InputHTMLAttributes<HTMLInputElement>) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState<string>('')
  const className = `input-field ${props.className ?? ''}`
  const filterLetters = useCallback((e: FormEvent) => {
    const element = (e.target as HTMLInputElement)
    const value = element.value.replace(/\D+/g, '')

    setInputValue(value)
  }, [])

  return (
    <>
      <input {...props} className={className.trim()} value={inputValue} type="text" inputMode="numeric" onInput={filterLetters} ref={inputRef} />
    </>
  )
}