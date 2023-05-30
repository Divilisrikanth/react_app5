import React, { useState } from 'react';
import './index.css';

const AddressBookEntryScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary actions with the form data (e.g., saving to a database)

    // Clear form fields
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <div className="address-book-entry">
      <h2>Add New Contact</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Phone:
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};

export default AddressBookEntryScreen;
