import React, { InputHTMLAttributes } from 'react'
import { InputContainer } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  id: string
}

const Input: React.FC<InputProps> = ({ label, id, ...attr }) => {
  return (
    <InputContainer>
      <label htmlFor={id}>{label}</label>
      <input id={id} {...attr} />
    </InputContainer>
  )
}

export default Input
