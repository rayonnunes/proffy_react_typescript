import React, { TextareaHTMLAttributes } from 'react'
import { TextAreaContainer } from './styles'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  id: string
}

const TextArea: React.FC<TextAreaProps> = ({ label, id, ...attr }) => {
  return (
    <TextAreaContainer>
      <label htmlFor={id}>{label}</label>
      <textarea id={id} {...attr} />
    </TextAreaContainer>
  )
}

export default TextArea
