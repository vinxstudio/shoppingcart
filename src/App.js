import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Mainpage from "./components/Mainpage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Mainpage />
      </div>
    );
  }
}

export default App;
