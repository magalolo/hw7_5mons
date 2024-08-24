import React, { useState, useCallback } from 'react';
import Form from './Form';
import List from './List';

function App() {
  const [contacts, setContacts] = useState([]);

  const addContact = useCallback((contact) => {
    setContacts((prevContacts) => [...prevContacts, contact]);
  }, []);

  const deleteContact = useCallback((index) => {
    setContacts((prevContacts) => prevContacts.filter((_, i) => i !== index));
  }, []);

  const editContact = useCallback((index, updatedContact) => {
    setContacts((prevContacts) => 
      prevContacts.map((contact, i) => (i === index ? updatedContact : contact))
    );
  }, []);

  return (
    <div className="App">
      <h1>Управление контактами</h1>
      <Form addContact={addContact} />
      <List 
        contacts={contacts} 
        deleteContact={deleteContact} 
        editContact={editContact} 
      />
    </div>
  );
}

export default App;
