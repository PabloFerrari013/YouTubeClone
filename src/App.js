import { ThemeProvider, createTheme } from '@material-ui/core'
import { useState } from 'react'

import Home from './Home'

function App() {
  const [darkMode] = useState(true)

  const theme = createTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
      primary: {
        main: '#f44336'
      },
      secondary: {
        main: '#3ea6ff'
      },
      background: {
        default: darkMode ? '#232323' : '#fff',
        dark: darkMode ? '#181818' : '#f4f6f8',
        paper: darkMode ? '#232323' : '#fff',
        searchBar: darkMode ? '#121212' : '#fff',
        boxSearchBar: darkMode ? '#373737' : '#f4f6f8'
      },
      borderColor: {
        searchBar: darkMode ? '#373737' : '#373737'
      }
    },

    spacing: 4
  })

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}

export default App
