import React from "react";
import styles from "./Buttom.module.css";
import PropTypes from "prop-types";

const Button = ({ galleryAppear }) => {
  return (
    <button type="button" onClick={galleryAppear} className={styles.Button}>
      Load more
    </button>
  );
};

Button.propTypes = {
  galleryAppear: PropTypes.func.isRequired,
};

export default Button;
