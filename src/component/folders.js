import React from "react";
import Context from "./context.js";

class Folders extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {ctx => {
          return (
            <React.Fragment>
              <div className="folders">
                <div className="foldersName">Folders</div>
              </div>
            </React.Fragment>
          );
        }}
      </Context.Consumer>
    );
  }
}
export default Folders;
