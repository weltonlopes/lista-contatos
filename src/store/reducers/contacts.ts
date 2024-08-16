import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Contact'
import Contact from '../../models/Contact'

type ContactsState = {
  itens: Contact[]
}

const initialState: ContactsState = {
  itens: [
    {
      id: 1,
      name: 'Aline',
      email: 'aline123@aline.com',
      telephone: '1899994443',
      positionAndCompany: '',
      contactType: enums.contactType.FRIEND,
      isFavorite: true
    },
    {
      id: 2,
      name: 'Zeni',
      email: 'zeni123@zeni.com',
      telephone: '1899994544',
      positionAndCompany: '',
      contactType: enums.contactType.FAMILY,
      isFavorite: false
    },
    {
      id: 3,
      name: 'Vanessa',
      email: 'vanessa123@vanessa.com',
      telephone: '1899994545',
      positionAndCompany: '',
      contactType: enums.contactType.WORK_PARTNER,
      isFavorite: false
    }
  ]
}

const getNextId = (itens: Contact[]): number => {
  const maxId = itens.reduce((max, item) => (item.id > max ? item.id : max), 0)
  return maxId + 1
}

const ContactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contact) => contact.id !== action.payload
      )
    },
    edit: (state, action: PayloadAction<Contact>) => {
      const contactIndex = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (contactIndex >= 0) {
        state.itens[contactIndex] = action.payload
      }
    },
    togleFavorite: (state, action: PayloadAction<Contact>) => {
      const contactIndex = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (contactIndex >= 0) {
        state.itens[contactIndex].isFavorite =
          !state.itens[contactIndex].isFavorite
      }
    },
    register: (state, action: PayloadAction<Contact>) => {
      const alreadyExists = state.itens.find(
        (c) => c.name === action.payload.name
      )
      if (alreadyExists) {
        alert('This name is already registered!')
      } else {
        const nextId = getNextId(state.itens)
        state.itens.push({ ...action.payload, id: nextId })
      }
    }
  }
})

export const { remove, edit, togleFavorite, register } = ContactsSlice.actions

export default ContactsSlice.reducer
