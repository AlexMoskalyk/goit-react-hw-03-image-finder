import React, { Component } from "react";
import styles from "./Modal.module.css";

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.onKeyDown);
  }

  onKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.closeModal();
    }
  };

  onBackDropClick = (e) => {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };

  render() {
    return (
      <div className={styles.Overlay} onClick={this.onBackDropClick}>
        <div className={styles.Modal}>{this.props.children}</div>
      </div>
    );
  }
}

export default Modal;
