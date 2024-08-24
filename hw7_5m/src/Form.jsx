import React, { useState } from 'react';

function Form({ addContact }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact({ name, phone });
    setName('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Имя" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        required 
      />
      <input 
        type="text" 
        placeholder="Номер телефона" 
        value={phone} 
        onChange={(e) => setPhone(e.target.value)} 
        required 
      />
      <button type="submit">Добавить</button>
    </form>
  );
}

export default Form;
