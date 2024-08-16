import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Contact'

type FilterState = {
  term?: string
  criteria: 'contactType' | 'all'
  value?: enums.contactType
}

const initialState: FilterState = {
  term: '',
  criteria: 'all'
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    changeTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload
    },
    changeFilter: (state, action: PayloadAction<FilterState>) => {
      state.term = ''
      state.criteria = action.payload.criteria
      state.value = action.payload.value
    }
  }
})

export const { changeTerm, changeFilter } = filterSlice.actions

export default filterSlice.reducer
