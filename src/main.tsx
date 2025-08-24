import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App.tsx';

const params = {
  recover: false,
  time: 6,
  reps: 4,
  height: 0,
  width: 0,
  minHeight: 0,
  minWidth: 0,
  color: null,
  backgroundColor: null,
};

const credits = [
    'Ghost in the Shell 1995 Opening Credits',
    'By Jeffrey Penkar',
    'http://jspenkar.com',
  ],
  credits2 = [
    ['Ghost in the Shell 1995 Opening Credits'],
    [
      'Ghost in the Shell 1995 Opening Credits',
      'By Jeffrey Penkar',
      'https://github.com/penkar',
      'http://jspenkar.com',
    ],
  ];

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App params={params} credits={credits} />
  </StrictMode>
);
