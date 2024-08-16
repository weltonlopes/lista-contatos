import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { changeFilter } from '../../store/reducers/filter'
import * as enums from '../../utils/enums/Contact'
import { RootReducer } from '../../store'

export type Props = {
  legend: string
  criteria: 'all' | 'contactType'
  value?: enums.contactType
}

const FilterCard = ({ legend, criteria, value }: Props) => {
  const dispatch = useDispatch()
  const { filter, contacts } = useSelector((state: RootReducer) => state)

  const isActiveVerifyer = () => {
    const sameCriteria = filter.criteria === criteria
    const sameValue = filter.value === value

    return sameCriteria && sameValue
  }

  const counterContacts = () => {
    if (criteria === 'all') return contacts.itens.length
    if (criteria === 'contactType') {
      return contacts.itens.filter((item) => item.contactType === value).length
    }
  }

  const doFilter = () => {
    dispatch(
      changeFilter({
        criteria,
        value
      })
    )
  }

  const counter = counterContacts()
  const isActive = isActiveVerifyer()

  return (
    <S.Card active={isActive} onClick={doFilter}>
      <S.Label>{legend}</S.Label>
      <S.Counter>{counter}</S.Counter>
    </S.Card>
  )
}

export default FilterCard
