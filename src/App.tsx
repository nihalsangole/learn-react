import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import TodoList from './components/todo/todoList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/shared/header';
import HooksLearn from './components/hooks/hooks.learn';
import Quiz from './components/quiz/Quiz';
import Appointment from './components/appoinment/Appointment';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path='/todo' element={<TodoList />} />
          <Route path='/hooks' element={<HooksLearn />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/appointment' element={<Appointment />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
