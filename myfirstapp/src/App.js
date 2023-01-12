import React from "react";
import Classcomp from "./component/Classcomp";
import Functional from "./component/Functional";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fDivState: false,
      cDivState: false,
    };
    // this.fDivState = false;
    // this.cDivState = false;
  }
  toggelDiv = (type) => {
    // alert("Great Shot!");
    var data = this.state;
    if (type == "f") {
      data.fDivState = !data.fDivState;
    } else {
      data.cDivState = !data.cDivState;
    }
    this.setState(data);
    console.log(data);
  };
  render() {
    return (
      <div>
        <h1
          style={{
            textShadow: "2px 2px #FF0000",
          }}
        >
          Styling using Functional and Class Component
        </h1>
        <div className="buttonDiv">
          <p
            className={
              this.state.fDivState ? "buttonStyle active" : "buttonStyle"
            }
            onClick={(event) => this.toggelDiv("f")}
          >
            To see styling in functional component
          </p>
          <p
            className={
              this.state.cDivState ? "buttonStyle active" : "buttonStyle"
            }
            onClick={(event) => this.toggelDiv("c")}
          >
            To see styling in class component
          </p>
        </div>
        <div className="buttonDiv">
          <div className="content">
            {this.state.fDivState ? <Functional /> : ""}
          </div>
          <div className="content">
            {this.state.cDivState ? <Classcomp /> : ""}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
