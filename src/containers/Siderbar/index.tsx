import { useDispatch, useSelector } from 'react-redux'
import FilterCard from '../../components/FilterCard'
import { Aside, FilterHolder, Input } from './styles'
import { RootReducer } from '../../store'
import { changeTerm } from '../../store/reducers/filter'
import * as enums from '../../utils/enums/Contact'

const SideBar = () => {
  const dispatch = useDispatch()
  const { term } = useSelector((state: RootReducer) => state.filter)

  return (
    <Aside>
      <div>
        <Input
          type="text"
          placeholder="Search"
          value={term}
          onChange={(event) => dispatch(changeTerm(event.target.value))}
        />
        <FilterHolder>
          <FilterCard
            value={enums.contactType.FRIEND}
            criteria="contactType"
            legend={enums.contactType.FRIEND}
          />
          <FilterCard
            value={enums.contactType.WORK_PARTNER}
            criteria="contactType"
            legend={enums.contactType.WORK_PARTNER}
          />
          <FilterCard criteria="all" legend="all" />
        </FilterHolder>
      </div>
    </Aside>
  )
}

export default SideBar
