import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import HomePage from 'scenes/homePage';
import LoginPage from 'scenes/loginPage';
import ProfilePage from 'scenes/profilePage';
import { useMemo } from 'react';
import {CssBaseline, ThemeProvider} from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from './theme';

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/profile/:userId" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
