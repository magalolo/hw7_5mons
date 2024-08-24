import React, { useState } from 'react';

function List({ contacts, deleteContact, editContact }) {
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingContact, setEditingContact] = useState({ name: '', phone: '' });

  const startEditing = (index) => {
    setEditingIndex(index);
    setEditingContact(contacts[index]);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditingContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const saveChanges = () => {
    if (editingIndex !== null) {
      editContact(editingIndex, editingContact);
      setEditingIndex(null);
    }
  };

  return (
    <ul>
      {contacts.map((contact, index) => (
        <li key={index}>
          {editingIndex === index ? (
            <>
              <input
                type="text"
                name="name"
                value={editingContact.name}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="phone"
                value={editingContact.phone}
                onChange={handleInputChange}
              />
              <button onClick={saveChanges}>Сохранить</button>
              <button onClick={() => setEditingIndex(null)}>Отмена</button>
            </>
          ) : (
            <>
              {contact.name} - {contact.phone}
              <button onClick={() => startEditing(index)}>Редактировать</button>
              <button onClick={() => deleteContact(index)}>Удалить</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default List;
