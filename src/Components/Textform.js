import React,{useState} from 'react'


export default function Textform(props) {
  const handleUpClick=()=>{
      //console.log("UpperCase Was Clicked",+ text);
      let newText=text.toUpperCase();
      setText(newText)
  }
  const handleOnChange=(event)=>{
      // console.log("On Change")
      setText(event.target.value)
  }
  const [text,setText]=useState("Enter the text");
return (
  <>
        <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>    
        </div>
        <div className='container my-3'>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes to read</p>

        </div>
  </>
)
}
