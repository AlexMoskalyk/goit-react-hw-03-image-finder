import React, { Component } from "react";
import styles from "./Searchbar.module.css";

class Searchbar extends Component {
  state = {
    searchedText: "",
  };

  onHandleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchedText);
    this.setState({ searchedText: "" });
  };

  onHandleChange = (e) => {
    const value = e.target.value;
    this.setState({ searchedText: value });
  };

  render() {
    return (
      <>
        <div className={styles.Searchbar}>
          <form onSubmit={this.onHandleSubmit} className={styles.SearchForm}>
            <button type="submit" className={styles.SearchFormButton}></button>
            <input
              type="text"
              onChange={this.onHandleChange}
              value={this.state.searchedText}
              name="searchedText"
              className={styles.SearchFormInput}
            />
          </form>
        </div>
      </>
    );
  }
}

export default Searchbar;
