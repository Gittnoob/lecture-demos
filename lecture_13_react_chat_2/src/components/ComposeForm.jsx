import React, { useState } from 'react';

export function ComposeForm(props) {

  const { addData } = props
  // [value being modified, function used to modify value] = initial value
  const [inputtedText, setInputtedText] = useState('');

  const handleClick = (event) => {
    addData(inputtedText)
  }

  const handleChange = (event) => {
    const typedValue = event.target.value;
    setInputtedText(typedValue)
  }

  return (
    <form className="my-2">
      <div className="input-group">
        <textarea className="form-control" rows="2" placeholder="Type a new message" onChange={handleChange}>{inputtedText}</textarea>
        <button className="btn btn-secondary" type="button" onClick ={handleClick}>
          <span className="material-icons">send</span>
        </button>
      </div>
    </form>
  );
}