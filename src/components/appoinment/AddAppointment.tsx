import { useState } from 'react';

function AddAppointment(props) {
  const [appointment, setAppointment] = useState({ name: '', date: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addAppointment(appointment);
    setAppointment({ name: '', date: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={appointment.name}
        onChange={(e) =>
          setAppointment({ ...appointment, name: e.target.value })
        }
        placeholder='Add Appointment Name'
      />
      <input
        type='date'
        value={appointment.date}
        onChange={(e) =>
          setAppointment({ ...appointment, date: e.target.value })
        }
        placeholder='Add Appointment Date'
      />

      <button type='submit' onClick={handleSubmit}>
        Add
      </button>
    </form>
  );
}

export default AddAppointment;
