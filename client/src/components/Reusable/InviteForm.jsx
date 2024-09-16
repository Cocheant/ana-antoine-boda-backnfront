import React, { useState } from 'react';

const InviteForm = ({closeCB}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:5000/api/invitations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Invitation added:', data);
        setName('');
        setEmail('');
      })
      .catch((error) => console.error('Error adding invitation:', error));
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button type="submit">Add Invitation</button>


    </form>
   
    </>
  );
};

export default InviteForm;
