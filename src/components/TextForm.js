import React, { useState } from "react";

export default function TextForm(props) {
  const handleClick = () => {
    // console.log("UpperCase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to uppercase', 'success');
  };
  const handleLowerClick = () => {
    // console.log("UpperCase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to lowercase', 'success');
  };
  const handleClearClick = () => {
    // console.log("UpperCase was clicked" + text);
    let newText = '';
    setText(newText);
    props.showAlert('Text cleared', 'success');
  };
  const handleCopy = () => {
    // console.log("UpperCase was clicked" + text);
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert('Text copied to clipboard', 'success');
  };
  const handleOnChange = (event) => {
    // console.log("OnChange");
    setText(event.target.value);
  };
  const handleRemoveExtraSpaces = () => {
    let newText = text.replace(/\s+/g, ' ');
    setText(newText);
    props.showAlert('Extra spaced removed', 'success');
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743' }} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox to preview it here"}</p>
      </div>
    </>
  );
}
