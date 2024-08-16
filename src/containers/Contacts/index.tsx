import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { Main } from '../../styles'
import ContactTable from '../../components/ContactTable'

const Contacts = () => {
  const { itens } = useSelector((state: RootReducer) => state.contacts)
  const { term, criteria, value } = useSelector(
    (state: RootReducer) => state.filter
  )

  const filterContact = () => {
    let filteredContacts = itens
    if (term !== undefined) {
      filteredContacts = filteredContacts.filter(
        (item) => item.name.toLowerCase().search(term.toLowerCase()) >= 0
      )

      if (criteria === 'contactType') {
        filteredContacts = filteredContacts.filter(
          (item) => item.contactType === value
        )
      }
    }
    return filteredContacts
  }

  const contactsList = filterContact()

  return (
    <Main>
      <h2>
        My contacts <span>({contactsList.length})</span>
      </h2>
      <ContactTable contacts={contactsList} />
    </Main>
  )
}

export default Contacts
