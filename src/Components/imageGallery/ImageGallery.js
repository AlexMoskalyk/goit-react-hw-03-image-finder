import React, { Component } from "react";
import ImageGalleryItem from "./imageGalleryItem/ImageGalleryItem";
// import PropTypes from "prop-types"; ????  не понимаю почему не работает

import styles from "./ImageGallery.module.css";

class ImageGallery extends Component {
  state = {
    // gallery: [],
    // page: 1,
  };

  //   componentDidMount() {
  //     fetch(
  //       `https://pixabay.com/api/?key=23308675-3bdf2416796cf281a4ef874ab&q=yellow+flowers&image_type=photo`
  //     )
  //       .then((res) => res.json())
  //       .then((photos) => this.setState({ gallery: photos }));
  //   }

  //   componentDidUpdate(prevProps, prevState) {
  //     if (prevProps.searchedText !== this.props.searchedText) {
  //       axios
  //         .get(
  //           `https://pixabay.com/api/?q=${this.props.searchedText}&page=${this.state.page}&key=23308675-3bdf2416796cf281a4ef874ab&image_type=photo&orientation=horizontal&per_page=12`
  //         )
  //         .then((res) => {
  //           return this.setState({ gallery: res.data.hits });
  //         });
  //     }
  //   }

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

// ImageGallery.propTypes = {
//   gallery: PropTypes.array.isRequired,
// }; ????

export default ImageGallery;
