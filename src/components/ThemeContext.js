import React, { useState, useEffect, createContext } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || '#F8F8FF');

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            {props.children}
        </ThemeContext.Provider>
    );
};

