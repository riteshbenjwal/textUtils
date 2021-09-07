import React, { useState } from "react";
import Button from "../components/Button";

function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleClearClick = (event) => {
    let newText = "";
    setText(newText);
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '))
    }
    

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div class="mb-3">
          <label for="myBox" class="form-label">
            Example textarea
          </label>
          <textarea
            class="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            rows="8"
          ></textarea>
        </div>
        <Button heading="Convert to UpperCase" handleClick={handleUpClick} />
        <Button heading="Convert to LowerCase" handleClick={handleLowClick} />
        <Button heading="Clear Text" handleClick={handleClearClick} />
        <Button heading="Copy Text" handleClick={handleCopy} />
        <Button heading="Remove Extra Space" handleClick={handleExtraSpaces} />
      </div>

      <div className="container my-4">
        <h3>Your Text Summary </h3>
        <p>
          {" "}
          {text.split(" ").length - 1} Words and {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>

        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}

export default TextForm;
