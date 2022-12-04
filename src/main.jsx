import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthContext } from './context/authContext';
import './index.css';
import RenderContext from './context/renderContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContext>
        <RenderContext>
          <App />
        </RenderContext>
      </AuthContext>
    </BrowserRouter>
  </React.StrictMode>
);
