import React from 'react';

function Button(props) {
  return (
    <>
    <button className="btn btn-primary mx-2 my-2" onClick={props.handleClick}>{props.heading}</button>
    </>



  )




}


export default Button;