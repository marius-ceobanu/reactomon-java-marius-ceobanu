import React from 'react';
import Main from './components/Main';
import './App.css';
import { ThemeProvider } from './components/ThemeContext';
import { PokeBallProvider } from "./components/PokeBallContext";

function App() {
    return (
        <ThemeProvider>
            <PokeBallProvider>
                <Main />
            </PokeBallProvider>
        </ThemeProvider>
    );
}

export default App;
