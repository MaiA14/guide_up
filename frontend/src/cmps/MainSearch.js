import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import quoryString from "query-string";

class MainSearch extends Component {
  state = {
    city: null,
  };
  componentDidMount() {
    const city = quoryString.parse(this.props.location.search);
    this.setState({ ...city });
  }
  onChange = (ev) => {
    const city = ev.target.value;
    ev.target.value = city;
    this.setState({ city });
  };

  onSearch = (ev) => {
    ev.stopPropagation();

    if (this.state.city) {
      this.props.history.push(`/location/?city=${this.state.city}`);
      if (this.props.onSearch) {
        this.props.onSearch(this.state.city);
      }
    }
  };

  render() {
    let style = "";
    const selectStyle = {
      background: "",
    };
    if (this.props.style) {
      style = this.props.style;
    } else style = "";
    return (
      <div style={style.containerStyle} className="search-container flex">
        <select
          style={style.selectStyle}
          value={this.state.city}
          onChange={this.onChange}
        >
          <option value="" disabled selected>
            {this.state.city ? this.state.city : "Select your destination"}{" "}
          </option>
          <option value="tel-aviv">Tel Aviv</option>
          <option value="paris">Paris</option>
          <option value="new-york">New York</option>
          <option value="mexico-city">Mexico-city</option>
          <option value="barcelona">Barcelona</option>
          <option value="berlin">Berlin</option>
        </select>
        <button className="search-btn" onClick={this.onSearch}>
          Search
        </button>
      </div>
    );
  }
}
export default withRouter(MainSearch);
