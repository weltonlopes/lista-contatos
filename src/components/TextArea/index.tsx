import { InputContainer } from '../Input/styles'
import { TextArea as TextAreaStyled } from './styles'

type Props = {
  value: string
  label: string
  name: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const TextArea = ({ value, label, name, onChange }: Props) => {
  return (
    <InputContainer>
      <TextAreaStyled
        value={value}
        name={name}
        placeholder={label}
        onChange={onChange}
      />
      <label htmlFor={name}>{label}</label>
    </InputContainer>
  )
}

export default TextArea
