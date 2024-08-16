import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

// Create root element for rendering
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

// Wrap App within <BrowserRouter> to enable routing:
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

