import React, { Component } from "react";
import { robots } from "./robots.js";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
// import "./index.css";
import { render } from "@testing-library/react";
class App extends Component {
  constructor() {
    super();
    this.state = { robots, searchField: "" };
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchField.toLowerCase());
    });
    return (
      <div className='tc'>
        <h1>Robots</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList props={filteredRobots} />
      </div>
    );
  }
}

export default App;
