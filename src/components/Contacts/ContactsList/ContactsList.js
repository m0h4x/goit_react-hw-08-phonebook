import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { deleteContact, fetchContacts } from '../../../redux/contacts/contacts-operations';

import {  List, Item, DeleteButton } from './ContactsList.styled';
import { useSelector, useDispatch } from 'react-redux';

import { getFoundedContacts } from "../../../redux/contacts/contacts-selector";



const ContactsList = () => {
    const contacts = useSelector(state => getFoundedContacts(state));
    const dispatch = useDispatch();


    const onDeleteContact = id => dispatch(deleteContact(id));
    useEffect(() => { dispatch(fetchContacts()) }, [dispatch])

    return (
        <div>
            <List>
                {contacts.map(({ id, name, number }) => (
                    <Item key={id}>
                        {name}: {number}
                        <DeleteButton onClick={() => onDeleteContact(id)}>
                            Delete
                        </DeleteButton>
                    </Item>
                ))}
            </List>
        </div>
    )
};
ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            nick: PropTypes.string,
            number: PropTypes.string,
        })
    ),
    onDeleteContact: PropTypes.func,
};

export default ContactsList;

// const ContactsList = () => {
//     const filter = useSelector(getFilter);
//     const { data: contacts, error } = useGetContactsQuery();
//     const [onDelete] = useDeleteContactMutation();

//     const normalizedFilter = filter
//         // .toLowerCase()
//         ;
//     let FilContacts = [];

//     if (contacts) {
//         FilContacts = contacts.filter(({ name }) =>
//             name.toLowerCase().includes(normalizedFilter),
//         );
//     }
//     useEffect(() => {
//         if (error) {
//             toast.error(`Server error`);
//         }
//     }, [error]);

//     return (
//         <>
//             {error && <Toaster />}
//             {!error && contacts && (
//                 <List>
//                     <Total>Total contacts: {FilContacts.length}</Total>
//                     {FilContacts.map(({ id, name, number }) => (
//                         <Item key={id}>
//                             {name} : {number}
//                             {
//                                 <DeleteButton
//                                     type="button"
//                                     name="delete"
//                                     onClick={() => onDelete(id)}
//                                 >
//                                     Delete
//                                 </DeleteButton>
//                             }
//                         </Item>
//                     ))}
//                 </List>
//             )}
//         </>
//     );
// };

// ContactsList.propTypes = {
//     contacts: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.string.isRequired,
//             name: PropTypes.string.isRequired,
//             number: PropTypes.string.isRequired,
//         }),
//     ),
// };
// export default ContactsList;










// import { useEffect } from 'react';
// import PropTypes from 'prop-types';
// import toast, { Toaster } from 'react-hot-toast';
// import { List, Item, DeleteButton, Total } from './ContactsList.styled';
// import { useSelector } from 'react-redux';
// import {
//     useGetContactsQuery,
//     useDeleteContactMutation,
// } from '../../API/contacts.API';
// import { getFilter } from '../../../redux/contacts/contacts-selector';

// const ContactsList = () => {
//     const filter = useSelector(getFilter);
//     const { data: contacts, error } = useGetContactsQuery();
//     const [onDelete] = useDeleteContactMutation();

//     const normalizedFilter = filter
//         // .toLowerCase()
//         ;
//     let FilContacts = [];

//     if (contacts) {
//         FilContacts = contacts.filter(({ name }) =>
//             name.toLowerCase().includes(normalizedFilter),
//         );
//     }
//     useEffect(() => {
//         if (error) {
//             toast.error(`Server error`);
//         }
//     }, [error]);

//     return (
//         <>
//             {error && <Toaster />}
//             {!error && contacts && (
//                 <List>
//                     <Total>Total contacts: {FilContacts.length}</Total>
//                     {FilContacts.map(({ id, name, number }) => (
//                         <Item key={id}>
//                             {name} : {number}
//                             {
//                                 <DeleteButton
//                                     type="button"
//                                     name="delete"
//                                     onClick={() => onDelete(id)}
//                                 >
//                                     Delete
//                                 </DeleteButton>
//                             }
//                         </Item>
//                     ))}
//                 </List>
//             )}
//         </>
//     );
// };

// ContactsList.propTypes = {
//     contacts: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.string.isRequired,
//             name: PropTypes.string.isRequired,
//             number: PropTypes.string.isRequired,
//         }),
//     ),
// };
// export default ContactsList;