import React from "react";
import Context from "./context.js";
import { Avatar } from "evergreen-ui";

class Headers extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {ctx => {
          return (
            <React.Fragment>
              <header className="header">
                <div className="divSearch">
                  <img
                    className="imgSearch"
                    src={require("../assets/search.png")}
                    alt=""
                  />
                  <input type="text" placeholder="Search on FileZ" />
                </div>
                <div className="chooseplane">
                  <a href="#4">Choose Plane</a>
                </div>
                <div className="userimg">
                  <Avatar
                    src="https://pbs.twimg.com/profile_images/756196362576723968/6GUgJG4L_400x400.jpg"
                    name="Jeroen Ransijn"
                    size={40}
                  />
                </div>
              </header>
            </React.Fragment>
          );
        }}
      </Context.Consumer>
    );
  }
}
export default Headers;
