import {StrictMode} from 'react';
import {createRoot, hydrateRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const root = document.getElementById('root')!;
const app = <StrictMode><App /></StrictMode>;

// Production serves the real page as HTML. Development still uses Vite's empty root.
if (root.hasChildNodes()) {
  hydrateRoot(root, app);
} else {
  createRoot(root).render(app);
}
