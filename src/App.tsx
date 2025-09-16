import './App.css';
import TodoList from './components/todo/todoList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/shared/header';
import HooksLearn from './components/hooks/hooks.learn';
import Quiz from './components/quiz/Quiz';
import Appointment from './components/appoinment/Appointment';
import TableApp from './components/virtualized-table/TableApp';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header className='sticky-header' />
        <div style={{ paddingTop: '100px' }}>
          <Routes>
            <Route path='/todo' element={<TodoList />} />
            <Route path='/hooks' element={<HooksLearn />} />
            <Route path='/quiz' element={<Quiz />} />
            <Route path='/appointment' element={<Appointment />} />
            <Route path='/virtualized-table' element={<TableApp />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
