"use client";
import { createContext, useContext, useState } from "react";

const DarkModeContext = createContext({
    isDarkMode: false,
    toggleDarkMode: () => {},
});

export const DarkModeContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [isDarkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {};

    return <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>{children}</DarkModeContext.Provider>;
};

export const useDarkMode = () => useContext(DarkModeContext);
