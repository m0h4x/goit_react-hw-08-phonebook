// import { createSlice } from "@reduxjs/toolkit";
// import { addNewContact, fetchContacts, deleteContact } from "./asyncThunks";

// export const contactsSlice = createSlice({
//   name: "phonebook",
//   initialState: { contacts: [], loading: false, filter: "" },

//   reducers: {
//     setFilter: {
//       reducer: (state, { payload }) => {
//         state.filter = payload;
//       },
//     },
//   },

//   extraReducers: {
//     [fetchContacts.pending]: (state) => {
//       state.loading = true;
//     },

//     [fetchContacts.fulfilled]: (state, { payload }) => {
//       state.contacts = payload;
//       state.loading = false;
//     },

//     [fetchContacts.rejected]: (state) => {
//       state.loading = false;
//     },

//     [addNewContact.fulfilled]: (state, { payload }) => {
//       state.contacts.push(payload);
//     },

//     [deleteContact.fulfilled]: (state, { payload }) => {
//       const index = state.contacts.findIndex((user) => user.id === payload.id);
//       state.contacts.splice(index, 1);
//     },
//   },
// });

// export const { setFilter } = contactsSlice.actions;
// export default contactsSlice.reducer;
