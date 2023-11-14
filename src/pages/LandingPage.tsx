import { useRecoilValue,useSetRecoilState } from "recoil"
import { themeState } from "../store/atom/colorTheme"
import { Typography , Button} from "@mui/material"

export function LandingPage(){
    const theme = useRecoilValue(themeState)
    const setTheme = useSetRecoilState(themeState)
    return(
        <div className={`App ${theme}`} style={{ display: 'flex', flexDirection: "column", alignItems: 'center', gap: '2rem' }}>
            <Typography variant="h1">Theme Switcher</Typography>
            <Typography variant="h6">Current Theme :  {theme}</Typography>
            <Button variant={theme === 'light' ? 'outlined' : 'contained'} color="success" onClick={()=>{
                setTheme((prevTheme)=> prevTheme === 'light'? 'dark' : 'light')
            }}>Toggle Theme</Button>
        </div>
    )
}