import React from "react";
import styles from "./ImageGalleryItem.module.css";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ imgURl, onPictureClick, largeImg }) => {
  return (
    <li
      className={styles.ImageGalleryItem}
      onClick={() => onPictureClick(largeImg)}
    >
      <img src={imgURl} alt="#" className={styles.ImageGalleryItemImage} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  imgURl: PropTypes.string.isRequired,
  onPictureClick: PropTypes.func.isRequired,
  largeImg: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
