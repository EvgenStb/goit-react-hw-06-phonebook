import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getContactsFilter, getContacts } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getContactsFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  console.log(filteredContacts)
  return (
    <ul>
      {filteredContacts.map(({id, name, number}) => {
        return (
          <li key={id}>
            <span>{name}:</span>
            <span>{number}</span>
            <button type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}


export default ContactList;
