import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="text-center">
        <img
          src="../assets/test.png"
          width="300"
          className="img-thumbnail"
          style={{ marginTop: "20px" }}
          alt = "Maho Jase IT"
        />
        <hr />
        <h5>
          <i>presents</i>
        </h5>
        <h1>App with React + Django</h1>
      </div>
    );
  }
}

export default Header;