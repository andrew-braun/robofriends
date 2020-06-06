import React from "react";
import CardList from "./CardList.js";
import SearchBox from "./SearchBox";
import { robots } from "./robots";

const App = () => {
  return (
    <React.Fragment>
      <h1 className="tc w-100">RoboFriends</h1>
      <SearchBox />
      <CardList robots={robots} />
    </React.Fragment>
  );
};

export default App;
