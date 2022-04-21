import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Header2, SearchInput } from './Filter.styled';
import { changeFilter } from '../../../redux/contacts/contacts-actions';
import { getFilter } from '../../../redux/contacts/contacts-selector';



export default function Filter() {
    const value = useSelector(getFilter);
    const dispatch = useDispatch();

    return (
        <div>
            <Header2 htmlFor="">Contacts</Header2>
            Find contacts by name
            <SearchInput
                type="text"
                name="filter"
                value={value}
                onChange={(e) => dispatch(changeFilter(e.currentTarget.value))}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                placeholder="Enter key word"
            />
        </div>
    )
};

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
};





















// import { memo } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import React from 'react';
// import PropTypes from 'prop-types';
// import { Header2, SearchInput } from './Filter.styled';
// import { changeFilter } from '../../../redux/contacts/contacts-actions';
// import { getFilter } from '../../../redux/contacts/contacts-selector';

// const Filter = () => {
//     const filter = useSelector(getFilter);
//     const dispatch = useDispatch();

//     const handleChange = e => dispatch(changeFilter(e.target.value));

//     return (
//         <div>
//             <Header2>Contacts</Header2>
//             Find contacts by name
//             <SearchInput type="text" value={filter} onChange={handleChange} />
//         </div>
//     );
// };

// Filter.propTypes = {
//     value: PropTypes.string,
//     onchangeFilter: PropTypes.func,
// };

// export default memo(Filter);