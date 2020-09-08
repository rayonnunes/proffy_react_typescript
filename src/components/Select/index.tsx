import React, { SelectHTMLAttributes } from 'react'
import { SelectContainer } from './styles'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  id: string
  options: Array<{
    value: string
    label: string
  }>
}

const Select: React.FC<SelectProps> = ({ label, id, options, ...attr }) => {
  return (
    <SelectContainer>
      <label htmlFor={id}>{label}</label>
      <select value="" id={id} {...attr}>
        <option value="" disabled hidden>
          Selecione uma opção
        </option>
        {options.map(({ value, label }) => (
          <option value={value} key={value}>
            {label}
          </option>
        ))}
      </select>
    </SelectContainer>
  )
}

export default Select
