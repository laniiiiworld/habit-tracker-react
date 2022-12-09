import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app';
import '@fortawesome/fontawesome-free/js/all.js';
import HabitPresenter from './habit_presenter';

const root = ReactDOM.createRoot(document.getElementById('root'));
const habitPresenter = new HabitPresenter([]);

root.render(
  <React.StrictMode>
    <App presenter={habitPresenter} />
  </React.StrictMode>
);
