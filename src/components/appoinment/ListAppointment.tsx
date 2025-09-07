import { useState } from 'react';
import './appointment.css';

function ListAppointment(props) {
  const { appointments } = props;

  const [editIndex, setEditIndex] = useState(null);
  const [editValues, setEditValues] = useState({ name: '', date: '' });

  const startEdit = (index) => {
    setEditIndex(index);
    setEditValues({
      name: appointments[index].name,
      date: appointments[index].date,
    });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditValues((prev) => ({ ...prev, [name]: value }));
  };

  const updateAppointment = (index) => {
    props.editAppointment(index, editValues);
    setEditIndex(null);
  };

  return (
    <div>
      <h2>List of Appointments</h2>
      <table className='appointment-table'>
        <thead>
          <tr style={{ color: 'black' }}>
            <th>Sr No.</th>
            <th>Name</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              {editIndex === index ? (
                <>
                  <td>
                    <input
                      type='text'
                      name='name'
                      value={editValues.name}
                      onChange={handleEditChange}
                    />
                  </td>
                  <td>
                    <input
                      type='date'
                      name='date'
                      value={editValues.date}
                      onChange={handleEditChange}
                    />
                  </td>
                  <td>
                    <button onClick={() => updateAppointment(index)}>
                      Save
                    </button>
                    <button onClick={() => setEditIndex(null)}>Cancel</button>
                  </td>
                </>
              ) : (
                <>
                  <td>{appointment.name}</td>
                  <td>{appointment.date}</td>
                  <td>
                    <button onClick={() => startEdit(index)}>Edit</button>
                    <button onClick={() => props.deleteAppointment(index)}>
                      Delete
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListAppointment;
