import React from "react";

export default function Functional() {
  return (
    <div
      style={{
        backgroundColor: "aquamarine",
        border: "1px solid",
        borderRadius: "50px",
        height: "250px",
      }}
    >
      <h1>This is created using functional component</h1>
      <div>This is done using external css</div>
      <br />
      <div className="class1">This is done using inline css</div>
    </div>
  );
}
