import React, { Component } from "react";
import ImageGalleryItem from "./imageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types";

import styles from "./ImageGallery.module.css";

class ImageGallery extends Component {
  render() {
    return (
      <>
        <ul className={styles.ImageGallery}>
          {this.props.gallery.map((hit) => (
            <ImageGalleryItem
              largeImg={hit.largeImageURL}
              imgURl={hit.webformatURL}
              key={hit.id}
              onPictureClick={this.props.onPictureClick}
            />
          ))}
        </ul>
      </>
    );
  }
}

ImageGallery.propTypes = {
  gallery: PropTypes.array.isRequired,
};

export default ImageGallery;
