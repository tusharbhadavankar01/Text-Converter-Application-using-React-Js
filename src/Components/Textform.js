import React,{useState} from 'react'


export default function Textform(props) {
  const [text,setText]=useState("");

  const handleUpClick=()=>{
      //console.log("UpperCase Was Clicked",+ text);
      let newText=text.toUpperCase();
      setText(newText)
      props.showAlert("Converted to UpperCase", "success")
  }

  const handleLoClick=()=>{
    //console.log("LowerCase Was Clicked",+ text);
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to LowerCase", "success")

}

const handleClearClick=()=>{
  //console.log("clear",+ text);
  let newText="";
  setText(newText)
  props.showAlert("Cleared text", "success")

}
const handleCopyClick = () => {
  let newText = text; 

  setText(newText);

  navigator.clipboard.writeText(newText).then(() => {
    props.showAlert("Copied to clipboard", "success")

  })

  }
  const handleRemoveSpace=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra spaces removed", "success")

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
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode==="dark" ?"#676767":"white", color:props.mode==="dark" ?"white":"black"}} id="mybox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1 " onClick={handleUpClick}>Convert to UpperCase</button> 
        <button  disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
        <button  disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopyClick}>Copy to Clipboard</button>
        <button  disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleRemoveSpace}>Remove Extra Spaces</button>
        <button  disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear Text</button>    
    
   
        </div>
        <div className='container my-3' style={{color:props.mode==="dark" ?"white":"black"}}>
        <h2>Your Text Summary</h2>
        <p>{ text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the above textbox to preview it here"}</p>
        </div>
  </>
)
}
