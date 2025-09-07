import { useState } from 'react';
import TodoItems from './todoItems';

function TodoList() {
  const [items, SetItems] = useState(['1', '2', '3']);

  const [task, setTask] = useState('');

  const add = () => {
    if (task.trim() !== '') {
      SetItems([...items, task]);
      setTask('');
    }
    console.log('button clicked');
  };

  return (
    <div>
      <h2>Todo List</h2>

      <input
        type='text'
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={add}>add</button>
      <ul>
        {items.map((item, index, arr) => (
          <TodoItems i={index} item={item} arr={arr} SetItems={SetItems} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
