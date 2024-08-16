import { InputContainer, Input as InputStyled } from './styles'

type Props = {
  value: string
  type: string
  label: string
  name: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ value, type, label, name, onChange }: Props) => {
  return (
    <InputContainer>
      <InputStyled
        value={value}
        name={name}
        type={type}
        placeholder={label}
        onChange={onChange}
      />
      <label htmlFor={name}>{label}</label>
    </InputContainer>
  )
}

export default Input
