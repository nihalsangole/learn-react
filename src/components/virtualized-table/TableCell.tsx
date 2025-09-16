import React, { useEffect, useState } from 'react';

function TableCell({ row, columnKey, onEdit }: any) {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState(row[columnKey]);

  useEffect(() => {
    setValue(row[columnKey]);
  }, [row, columnKey]);

  const save = () => {
    setEditing(false);
    if (value !== row[columnKey]) {
      onEdit(row.id, columnKey, value);
    }
  };

  if (columnKey === 'score' || columnKey === 'status') {
    if (editing) {
      return (
        <td className='table-cell'>
          {columnKey === 'status' ? (
            <select
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onBlur={save}
              onKeyDown={(e) => e.key === 'Enter' && save()}
              autoFocus
            >
              <option>Active</option>
              <option>Inactive</option>
            </select>
          ) : (
            <input
              type='number'
              value={value}
              onChange={(e) => setValue(Number(e.target.value))}
              onBlur={save}
              onKeyDown={(e) => e.key === 'Enter' && save()}
              autoFocus
            />
          )}
        </td>
      );
    }
    return (
      <td className='table-cell' onDoubleClick={() => setEditing(true)}>
        {row[columnKey]}
      </td>
    );
  }

  return <td className='table-cell'>{row[columnKey]}</td>;
}

export default React.memo(TableCell);
