// import { ThemeProvider } from "@emotion/react";
import { Typography, Button } from "@mui/material"
import { useTheme,ThemeProvider } from "./context-api/ThemeContext"
import "./App.css"


function App() {
const{theme,toggleTheme} = useTheme();

  return (
    <div className={`App ${theme}`} style={{display:'flex',flexDirection:"column",alignItems:'center',gap:'2rem'}}>
      <Typography variant="h1">Theme Switcher</Typography>
      <Typography variant="h6">Current Theme :  {theme}</Typography>
      <Button variant={theme === 'light' ? 'outlined' :'contained'} color="success" onClick={toggleTheme}>Toggle Theme</Button>
    </div>
  )
}


export default function ThemedApp(){
  return (
    <ThemeProvider>
      <App/>
    </ThemeProvider>
  )
}
