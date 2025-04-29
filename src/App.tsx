import "./App.css";

import { ToastProvider } from "./component/ui/Toast";

import Dashboard from "./component/pages/Dashboard";
import LandingPage from "./component/pages/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Signin } from "./component/pages/Signin";

function App() {
  return (
    <>
      <ToastProvider>
      
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<LandingPage/>}/>

      <Route path="/signin" element={<Signin/>} />
      <Route path="/dashboard" element={<Dashboard/>}/>



      <Route path="*" element={<div style={{backgroundColor :"white"}}> <b>please go back to main page</b>  </div>}/>
    </Routes>
    </BrowserRouter>
   
  
      </ToastProvider>
    </>
  );
}

export default App;
