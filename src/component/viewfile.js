import React from "react";
import Context from "./context.js";
import { Select } from "evergreen-ui";

class ViewFile extends React.Component {
  render() {
    return (
      <Context.Consumer>
        {ctx => {
          return (
            <React.Fragment>
              <div className="viewFile">
                <Select width={240}>
                  <option value="All File" checked>
                    All File
                  </option>
                  <option value="image">image</option>
                  <option value="PDF">PDF</option>
                  <option value="Video">Video</option>
                  <option value="MP3">MP3</option>
                  <option value="Other">Other</option>
                </Select>
              </div>
            </React.Fragment>
          );
        }}
      </Context.Consumer>
    );
  }
}
export default ViewFile;
