import { useState } from 'react';
import AddAppointment from './AddAppointment';
import ListAppointment from './ListAppointment';

function Appointment() {
  const [appointments, setAppointments] = useState([]);

  const addAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  const editAppointment = (index, updatedAppointment) => {
    const updatedAppointments = appointments.map((appointment, i) =>
      i === index ? updatedAppointment : appointment
    );
    setAppointments(updatedAppointments);
  };

  const removeAppointment = (index) => {
    const updatedAppointments = appointments.filter((item, i) => i !== index);
    setAppointments(updatedAppointments);
  };

  const clearAppointments = () => {
    setAppointments([]);
  };

  return (
    <>
      <h1>Appointment Booking App</h1>
      <AddAppointment addAppointment={addAppointment} />
      <ListAppointment
        appointments={appointments}
        editAppointment={editAppointment}
        removeAppointment={removeAppointment}
      />
      <button onClick={clearAppointments}>Clear All</button>
    </>
  );
}

export default Appointment;
