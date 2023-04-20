import checkout from "pages/[channel]/[locale]/checkout";
import React from "react";
// @ts-ignore
function ModalContent({ onClose }) {
  const style = {
    backgroundColor: "red",
    color: "black",
    padding: "10px",
    border: "1px solid black",
  };

  console.log("Hello");
  console.log(document.getElementById("my-portal"));
  return (
    <>
      <div style={style}>
        <p> Hi</p>
        <button onClick={onClose}>Close</button>
      </div>
    </>
  );
}

export default ModalContent;
