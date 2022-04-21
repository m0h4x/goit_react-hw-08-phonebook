import { useState } from "react";
import { addContact } from "../../../redux/contacts/contacts-operations";
import PropTypes from "prop-types";
import { Header, Form, Input, Button } from "./ContactsForm.styled";

import { useDispatch } from "react-redux";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch(); 

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <>
      <Header> Phonebook </Header>
      <Form onSubmit={handleSubmit}>
        <label>
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}

          />
        </label>
        <label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
          />
        </label>
        <Button type="submit">Add contact</Button>
      </Form>
    </>
  )
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func,
};






















// import React, { useState, memo } from "react";
// import {
//   useGetContactsQuery,
//   useAddContactMutation,
// } from "../../API/contacts.API";
// import PropTypes from "prop-types";
// import { Header, Form, Input, Button } from "./ContactsForm.styled";

// const ContactForm = () => {
//   const [name, setName] = useState("");
//   const [number, setNumber] = useState("");

//   const { data: contacts, error: contactsError } = useGetContactsQuery();
//   const [addContact] = useAddContactMutation();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (contactsError) {
//       alert(`Server not responding`);
//       return;
//     }

//     const isInContacts = ({ name, number }) => {
//       const normalizedName = name.toLowerCase();
//       const normalizedNumber = number;
//       return contacts.some((contact) => {
//         return (
//           contact.name.toLowerCase() === normalizedName ||
//           contact.phone === normalizedNumber
//         );
//       });
//     };

//     if (isInContacts({ name, number })) {
//       alert(`${name} is already in your contacts`);
//       return;
//     }

//     addContact({ name, number });

//     setName("");
//     setNumber("");
//   };

//   const handleChange = (e) => {
//     const inputName = e.target.name;
//     const value = e.target.value;
//     if (inputName === "name") {
//       setName(value);
//     }
//     if (inputName === "number") {
//       setNumber(value);
//     }
//   };

//   return (
//     <div>
//       <Header> Phonebook </Header>
//       <Form onSubmit={handleSubmit}>
//         <label>
//           Name
//           <Input
//             type="text"
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//             required
//             value={name}
//             onChange={handleChange}
//           />
//         </label>
//         <label>
//           Number
//           <Input
//             type="tel"
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//             value={number}
//             onChange={handleChange}
//           />
//         </label>
//         <Button type="submit">Add contact</Button>
//       </Form>
//     </div>
//   );
// };

// ContactForm.propTypes = {
//   name: PropTypes.string,
//   number: PropTypes.string,
//   AddContact: PropTypes.func,
// };
// export default memo(ContactForm);
