import "./App.css";
import Alert from "./Components/Alert";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import React, { useState } from 'react';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom";



function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  
  const showAlert=(message,type)=>{
    setAlert(
      {msg:message,
      type:type}
    )
    setTimeout(()=>{
      setAlert(null);
      } ,1500 );
  }


  const toggleMode=()=>{
    if(mode==="light")
      {
      setMode("dark")
        document.body.style.backgroundColor="grey";
        showAlert("Dark mode has been enabled","success")
    }
  
    else
  {
    setMode("light")
    document.body.style.backgroundColor="white";
    showAlert("Light mode has been enabled","success")


  }
}
  return (
    
    <Router>
      <Navbar title="Text Converter" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route  exact path="/about" element={<About   mode={mode}/>}/>
          <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter the Text to Convert" mode={mode} />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
