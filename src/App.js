import React from "react";
import "./App.css";
import LibraryDisplay from "./components/LibraryDisplay/LibraryDisplay";

export class App extends React.Component {
  render() {
    return (
      <div>
        <LibraryDisplay></LibraryDisplay>
      </div>
    );
  }
}

export default App;
