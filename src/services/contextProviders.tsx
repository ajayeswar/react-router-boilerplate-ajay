import { createContext } from "react";

interface ThemeContextInterface {
    theme: string,
    setThemeMode: () => any
}

const initialThemeContext: ThemeContextInterface = {
    theme: 'light',
    setThemeMode: () => { }
};

export const ThemeContext = createContext(initialThemeContext);
export const Configuration = createContext({});