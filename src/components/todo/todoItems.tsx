import { useState } from 'react';

function TodoItems(prop: {
  item: string;
  i: number;
  arr: string[];
  SetItems: (items: string[]) => void;
}) {
  const [editValue, setEditValue] = useState(prop.item);
  const [edit, setEdit] = useState(false);

  const remove = () => {
    const modified = [...prop.arr];
    modified.splice(prop.i, 1);
    prop.SetItems(modified);
    console.log('button clicked');
  };

  const startEdit = () => {
    setEdit(true);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditValue(event.target.value);
  };

  const saveEdit = () => {
    const modified = [...prop.arr];
    modified[prop.i] = editValue;
    prop.SetItems(modified);
    setEdit(false);
  };

  return (
    <li>
      {!edit && (
        <>
          task {prop.item}
          <button onClick={startEdit}>edit</button>
        </>
      )}
      {edit && (
        <>
          <input type='text' value={editValue} onChange={handleInputChange} />
          <button onClick={saveEdit}>save</button>
        </>
      )}
      <button onClick={remove}>remove</button>
    </li>
  );
}
export default TodoItems;
