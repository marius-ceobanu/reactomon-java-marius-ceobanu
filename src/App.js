import React from 'react';
import Main from './components/Main';
import './App.css';
import { ThemeProvider } from './components/ThemeContext';

function App() {
    return (
        <ThemeProvider>
            <Main />
        </ThemeProvider>
    );
}

export default App;
