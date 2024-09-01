import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";

function App() {
  return (
    <>
     <Navbar title="Text"/>
     <div className="container my-3">
     <Textform heading="Enter the Text to Convert"/> 
      {/* <About/> */}
     </div>

    </>
  );
}

export default App;
