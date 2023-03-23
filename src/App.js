import React, { Component } from "react";
import "./App.css";
import KeyPadComponent from "./components/KeyPadComponent";
import ResultComponent from "./components/ResultComponent";

class App extends Component {
  // Constructor goes here
  constructor() {
    super();

    this.state = {
      result: "",
    };
  }

  render() {
    return (
      <div>
        <div className="calculator-body">
          <h1>Simple React Calculator</h1>
          {/* components go here once finished */}
          <ResultComponent onClick={this.onClick} />
          <KeyPadComponent onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

export default App;
