import React, { Component } from "react";
import Context from "./component/context.js";

import Show from "./component/show.js";
import Headers from "./component/header";
import ViewFile from "./component/viewfile";
import Tables from "./component/table";
import Folders from "./component/folders";
// import Nav from "./component/nav";

class App extends Component {
  constructor() {
    super();
    this.state = {
      profile: [
        { id: 1, name: "image.jpg", uploadedAt: "7/1/2019", fileSize: "3.4MB" },
        { id: 2, name: "vsco.pdf", uploadedAt: "7/1/2019", fileSize: "1.1MB" },
        { id: 3, name: "oscar.png", uploadedAt: "7/1/2019", fileSize: "1.4MB" },
        { id: 4, name: "hoho.mp3", uploadedAt: "7/1/2019", fileSize: "3.2MB" },
        { id: 5, name: "echo.mkv", uploadedAt: "7/1/2019", fileSize: "2.6MB" },
        { id: 6, name: "pic.jpg", uploadedAt: "7/1/2019", fileSize: "1.5MB" },
        { id: 7, name: "tran.jpg", uploadedAt: "7/1/2019", fileSize: "3.4MB" }
      ]
    };
  }
  render() {
    return (
      <Context.Provider value={{ value: this.state.profile }}>
        <Show />
        <Headers />
        <ViewFile />
        <Folders />
        <Tables />
      </Context.Provider>
    );
  }
}
export default App;
