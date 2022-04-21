import toast from 'react-hot-toast';
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  // deleteContact,
  changeFilter,
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
} from './contacts-actions';

const contacts = createReducer([],
  // initialContacts,
  {
    [fetchContactsSuccess]: (_, { payload }) => payload,
    [addContactSuccess]: (state, { payload }) => {
      if (state.find(contact => contact.name === payload.name)) {
        const notify = `${payload.name} is already on list`;
        toast.error(notify);
        return state;
      }
      state = [...state, payload];
      toast.success(`Contact ${payload.name} added!`);
      return state;
    },
    [deleteContactSuccess]: (state, { payload }) => state.filter(({ id }) => id !== payload),
  })

const filter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
})
const loading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,

})
export default combineReducers({
  contacts,
  filter,
  loading,
});