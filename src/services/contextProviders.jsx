// const ThemeContext = React.createContext('light')
// class ThemeProvider extends React.Component {
//   /* code */
// }
// const ThemeConsumer = ThemeContext.Consumer
// const LanguageContext = React.createContext('en')
// class LanguageProvider extends React.Component {
//   /* code */
// }
// const LanguageConsumer = LanguageContext.Consumer
// function AppProviders({children}) {
//   return (
//     <LanguageProvider>
//       <ThemeProvider>{children}</ThemeProvider>
//     </LanguageProvider>
//   )
// }
// function ThemeAndLanguageConsumer({children}) {
//   return (
//     <LanguageConsumer>
//       {language => (
//         <ThemeConsumer>{theme => children({language, theme})}</ThemeConsumer>
//       )}
//     </LanguageConsumer>
//   )
// }
// class App extends React.Component {
//   render() {
//     return (
//       <AppProviders>
//         <ThemeAndLanguageConsumer>
//           {({theme, language}) => (
//             <div>
//               {theme} and {language}
//             </div>
//           )}
//         </ThemeAndLanguageConsumer>
//       </AppProviders>
//     )
//   }
// }

import { createContext } from "react";
export const AuthContext = createContext({
    isLoggedIn: false,
    token: null,
    login: () => { },
    logout: () => { }
});