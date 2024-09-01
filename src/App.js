import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode=()=>{
    if(mode==="light")
      {
      setMode("dark")
        document.body.style.backgroundColor="grey";
    }
  
    else
  {
    setMode("light")
    document.body.style.backgroundColor="white";

  }
}
  return (
    <>
     <Navbar title="Text Converter" mode={mode} toggleMode={toggleMode}/>
     <div className="container my-3">
     <Textform heading="Enter the Text to Convert" mode={mode} /> 
      {/* <About/> */}
     </div>

    </>
  );
}

export default App;
