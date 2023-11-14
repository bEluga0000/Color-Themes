import { createContext, ReactNode, useState,useContext } from "react";
interface ThemeContextProps{
    theme:string;
    toggleTheme:()=> void
}
// Defining the context here
const ThemeContext = createContext<ThemeContextProps|undefined>(undefined)

interface ThemeProviderProps{
    children:ReactNode
}
export function ThemeProvider({children}:ThemeProviderProps)
{
    const [theme,setTheme] = useState('light')
    const toggleTheme = ()=>{
        setTheme((prevTheme)=>(prevTheme==='light'?'dark':'light'))
    }
    const contextValue:ThemeContextProps={
        theme,
        toggleTheme
    }
    return <ThemeContext.Provider value={contextValue}>
        {children}
    </ThemeContext.Provider>
}

export function useTheme(){
    const context = useContext(ThemeContext);
    if(!context)
    {
        throw new Error('Use theme must be in theme provider')
    }
    return context
}