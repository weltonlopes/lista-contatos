import * as enums from '../utils/enums/Contact'

class Contact {
  id: number
  name: string
  email: string
  telephone: string
  positionAndCompany: string
  contactType: enums.contactType
  isFavorite: boolean

  constructor(
    id: number,
    name: string,
    email: string,
    telephone: string,
    positionAndCompany: string,
    contactType: enums.contactType,
    isFavorite: boolean
  ) {
    this.id = id
    this.name = name
    this.email = email
    this.telephone = telephone
    this.positionAndCompany = positionAndCompany
    this.contactType = contactType
    this.isFavorite = isFavorite
  }
}

export default Contact
