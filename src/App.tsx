// import { ThemeProvider } from "@emotion/react";
import "./App.css"
import { RecoilRoot } from "recoil"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";


export default function App() {
// const{theme,toggleTheme} = useTheme();

  return (
    <RecoilRoot>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}></Route>
      </Routes>
      </BrowserRouter>
    </RecoilRoot>
  )
}


