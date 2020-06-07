import React, { Component } from "react";
import CardList from "./CardList.js";
import SearchBox from "./SearchBox";
import { robots } from "./robots";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: ''
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value});
  }

  render() {
    const filteredRobots = this.state.robots.filter((robots) => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });
    return (
      <React.Fragment>
        <h1 className="tc w-100">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </React.Fragment>
    );
  }
}
export default App;
