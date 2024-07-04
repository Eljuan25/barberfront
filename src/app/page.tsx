
"use client";

import styles from '@/css/Customers.module.css';
import { useState } from 'react';
import { createCustomer } from '@/utils/api';
import 'bootstrap/dist/css/bootstrap.min.css';



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
    <div className="container py-4 text-center">
       <h1>Barberfu</h1> 
       <br />
      <h1>Register Customer</h1>
      <form onSubmit={handleFormSubmit} className={styles.form}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone:</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
        <button type="submit" className="btn btn-primary">Sing In</button>
      </form>
      {message && <p className={styles.message}>{message}</p>}
    </div>
  );
}

