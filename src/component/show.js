import React from "react";
import Context from "./context.js";

class Show extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {ctx => {
          return (
            <React.Fragment>
              <div className="main">
                <div className="leftcomponent">
                  <div className="logo">
                    <img src={require("../assets/cloud.png")} alt="" />
                    <p>FileZ</p>
                  </div>
                  <div className="btnAdd">
                    <img src={require("../assets/plus.png")} alt="" />
                    <a href="#0">Add New</a>
                  </div>
                  <div className="myfile">
                    <img src={require("../assets/myfile.png")} alt="" />
                    <a href="#1">My File</a>
                  </div>
                  <div className="bin">
                    <img src={require("../assets/bin.png")} alt="" />
                    <a href="#2">Trash</a>
                  </div>
                  <div className="sorage">
                    <div className="storimg">
                      <img src={require("../assets/storage.png")} alt="" />
                      <p>Storage</p>
                    </div>
                    <div className="szlider">
                      <div className="szliderbar" />
                    </div>
                    <div className="storparg">
                      <p>50 MB of 100 MB used</p>
                    </div>
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        }}
      </Context.Consumer>
    );
  }
}

export default Show;
