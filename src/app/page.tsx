

"use client";

import { useEffect, useState } from 'react';
import { fetchCustomers } from '@/utils/api';

export default function Customers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    async function getCustomers() {
      try {
        const data = await fetchCustomers();
        setCustomers(data);
      } catch (error) {
        console.error('Error fetching customers:', error);
      }
    }

    getCustomers();
  }, []);

  return (
    <div>
      <h1>Customers</h1>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>{customer.name}</li>
        ))}
      </ul>
    </div>
  );
}
