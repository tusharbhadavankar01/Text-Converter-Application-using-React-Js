import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";

function App() {
  return (
    <>
     <Navbar title="Text"/>
     <div className="container my-3">
      <Textform heading="Enter the Text to Convert"/>
     </div>

    </>
  );
}

export default App;
