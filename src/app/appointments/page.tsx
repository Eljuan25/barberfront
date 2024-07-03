
"use client";

import { useEffect, useState } from 'react';
import { fetchAppointments } from '../../utils/api';

export default function Appointments() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function getAppointments() {
      try {
        const data = await fetchAppointments();
        setAppointments(data);
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
    }

    getAppointments();
  }, []);

  return (
    <div>
      <h1>Appointments</h1>
     
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>{appointment.date}</li>
        ))}
      </ul>
    </div>
  );
}
