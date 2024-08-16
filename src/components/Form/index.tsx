import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Main } from '../../styles'
import Input from '../Input'
import TextArea from '../TextArea'
import { Form as FormStyled, Button } from './styles'
import { FormEvent, useState } from 'react'
import * as enums from '../../utils/enums/Contact'
import Contact from '../../models/Contact'
import { register } from '../../store/reducers/contacts'

const Form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [email, setEmail] = useState('')
  const [telephone, setTelephone] = useState('')
  const [company, setCompany] = useState('')
  const [position, setPosition] = useState('')
  const [description, setDescription] = useState('')

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault()
    const positionAndCompany = `${position} at ${company}`
    const contact = new Contact(
      1,
      title,
      email,
      telephone,
      positionAndCompany,
      enums.contactType.FAMILY,
      false
    )
    dispatch(register(contact))
    navigate('/')
  }

  return (
    <Main>
      <FormStyled onSubmit={handleFormSubmit}>
        <h1>Contact Form</h1>
        <Input
          value={title}
          name="title"
          type="text"
          label="Nome"
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          value={email}
          name="email"
          type="email"
          label="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          value={telephone}
          name="telephone"
          type="phone"
          label="Telephone"
          onChange={(e) => setTelephone(e.target.value)}
        />
        <Input
          value={company}
          name="company"
          type="text"
          label="Company"
          onChange={(e) => setCompany(e.target.value)}
        />
        <Input
          value={position}
          name="position"
          type="text"
          label="Position"
          onChange={(e) => setPosition(e.target.value)}
        />
        <TextArea
          value={description}
          name="description"
          label="Contact Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button type="submit">Register</Button>
      </FormStyled>
    </Main>
  )
}

export default Form
