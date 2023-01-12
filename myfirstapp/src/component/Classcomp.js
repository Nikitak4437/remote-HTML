import React, { Component } from "react";

export class Classcomp extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "pink",
          border: "1px solid",
          borderRadius: "50px",
          height: "250px",
        }}
      >
        <h1>This is created using class component</h1>
        <div>This is done using external css</div>
        <br />
        <div className="class1">This is done using inline css</div>
      </div>
    );
  }
}

export default Classcomp;
