import React from "react";
// @ts-ignore
function ModalContent({ onClose }: { onClose: () => void }) {
  const style = {
    backgroundColor: "red",
    color: "black",
    padding: "10px",
    border: "1px solid black",
  };

  return (
    <>
      <div style={style}>
        <p> Hi</p>
        <button type="button" onClick={onClose}>
          Close
        </button>
      </div>
    </>
  );
}

export default ModalContent;
