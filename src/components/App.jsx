// import { nanoid } from 'nanoid';
// import Notiflix from 'notiflix';

// import { useState, useEffect } from 'react'
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

const App = () => {
   return (
      <>
        <h2>Phonebook</h2>
        <ContactForm/>
        <h2>Contacts</h2>
        <Filter/>
        <ContactList/>
      </>
    );

}

export default App;