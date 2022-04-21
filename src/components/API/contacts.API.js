import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const contactsApi = createApi({
  reducerPath: "contactsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://6214258e89fad53b1f0be3dc.mockapi.io",
  }),
  tagTypes: ["Contacts"],
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => "/contacts",
      providesTags: (result) =>
        result
          ? result.map(({ id }) => ({ type: "Contacts", id }))
          : ["Contacts"],
    }),
    addContact: builder.mutation({
      query: (newContact) => ({
        url: `/contacts`,
        method: "POST",
        body: newContact,
      }),
      invalidatesTags: ["Contacts"],
    }),
    deleteContact: builder.mutation({
      query: (contactID) => ({
        url: `/contacts/${contactID}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contacts"],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;
