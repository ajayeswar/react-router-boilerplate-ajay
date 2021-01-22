import { createContext } from "react";

export const ThemeContext = createContext({
    theme : 'light',
    setThemeMode: () => {}
});
export const Configuration = createContext({});