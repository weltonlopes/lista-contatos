import { useDispatch } from 'react-redux'

import ContactClass from '../../models/Contact'
import * as S from './styles'
import favoriteImage from '../../img/isfavorite.png'
import notFavoriteImage from '../../img/isnotfavorite.png'
import excluirImage from '../../img/excluir.png'
import { togleFavorite } from '../../store/reducers/contacts'

type Props = ContactClass

interface ContactTableProps {
  contacts: Props[]
}

const ContactTable = ({ contacts }: ContactTableProps) => {
  const dispatch = useDispatch()
  return (
    <S.Table>
      <S.THead>
        <S.TRow>
          <th>Name</th>
          <th>E-mail</th>
          <th>Telephone number</th>
          <th>Position and company</th>
          <th>Contact Type</th>
          <th>Actions</th>
        </S.TRow>
      </S.THead>
      <tbody>
        {contacts.map((contact) => (
          <S.TRow key={contact.id}>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>{contact.telephone}</td>
            <td>{contact.positionAndCompany}</td>
            <td>{contact.contactType}</td>
            <td>
              <S.actionsContainer>
                <S.FavoriteIcon
                  isFavorite={contact.isFavorite}
                  src={contact.isFavorite ? favoriteImage : notFavoriteImage}
                  onClick={() => dispatch(togleFavorite(contact))}
                />
                <S.RemoveIcon src={excluirImage} />
              </S.actionsContainer>
            </td>
          </S.TRow>
        ))}
      </tbody>
    </S.Table>
  )
}

export default ContactTable
