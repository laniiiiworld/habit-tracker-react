import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@fortawesome/fontawesome-free/js/all.js';
import HabitPresenter from './app/habit_presenter';
import App from './app/app';

const root = ReactDOM.createRoot(document.getElementById('root'));
const habitPresenter = new HabitPresenter([], 10);

root.render(
  <React.StrictMode>
    <App presenter={habitPresenter} />
  </React.StrictMode>
);
