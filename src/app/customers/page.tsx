// src/app/customers/page.jsx
"use client";

import { useState } from 'react';
import { createCustomer } from '@/utils/api';

export default function Customers() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const customerData = { name, phone, email };
      const response = await createCustomer(customerData);
      setMessage(`Customer ${response.name} registered successfully!`);
      setName('');
      setPhone('');
      setEmail('');
    } catch (error) {
      console.error('Error creating customer:', error);
      setMessage('Failed to register customer.');
    }
  };

  return (
    <div>
      <h1>Register Customer</h1>
      <form onSubmit={handleFormSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        /><br />
        <label>Phone:</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        /><br />
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
