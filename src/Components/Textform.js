import React,{useState} from 'react'


export default function Textform(props) {
  const [text,setText]=useState("");

  const handleUpClick=()=>{
      //console.log("UpperCase Was Clicked",+ text);
      let newText=text.toUpperCase();
      setText(newText)
  }

  const handleLoClick=()=>{
    //console.log("LowerCase Was Clicked",+ text);
    let newText=text.toLowerCase();
    setText(newText)
}

const handleClearClick=()=>{
  //console.log("clear",+ text);
  let newText="";
  setText(newText)
}
const handleCopyClick = () => {
  let newText = text; 

  setText(newText);

  navigator.clipboard.writeText(newText).then(() => {
      alert("Text copied to clipboard");
  })

  }
  const handleRemoveSpace=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  const handleOnChange=(event)=>{
      // console.log("On Change")
      setText(event.target.value)
  }
return (
  <>
        <div className='container' style={{color:props.mode==="dark" ?"white":"black"}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode==="dark" ?"grey":"white", color:props.mode==="dark" ?"white":"black"}} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-1 " onClick={handleUpClick}>Convert to UpperCase</button> 
        <button className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleCopyClick}>Copy to Clipboard</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleRemoveSpace}>Remove Extra Spaces</button>
        <button className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>    
    
   
        </div>
        <div className='container my-3' style={{color:props.mode==="dark" ?"white":"black"}}>
        <h2>Your Text Summary</h2>
        <p>{ text.trim().length === 0 ? 0 : text.split(/\s+/).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the above textbox to preview it here"}</p>
        </div>
  </>
)
}
