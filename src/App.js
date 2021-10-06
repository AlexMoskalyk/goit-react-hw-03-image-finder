import React, { Component } from "react";
import Button from "./Components/button/Button";
import ImageGallery from "./Components/imageGallery/ImageGallery";
import Searchbar from "./Components/searchbar/Searchbar";
// import axios from "axios";
import Modal from "./Components/modal/Modal";
import styles from "./App.module.css";
import Loader from "react-loader-spinner";
import fetchApi from "./services/API";

class App extends Component {
  state = {
    searchedText: "",
    gallery: [],
    page: 1,
    total: 0,
    largeImageURL: {},
    error: null,
    showModal: false,
    showLoader: false,
  };

  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchedText !== this.state.searchedText) {
      this.getGalleryAppear();
    }

    if (
      prevState.searchedText === this.state.searchedText &&
      prevState.page !== this.state.page
    ) {
      this.getGalleryAppear();
    }
  }

  getGalleryAppear = () => {
    this.setState({ showLoader: true });

    fetchApi(this.state.searchedText, this.state.page)
      .then((res) => {
        this.setState((prevState) => ({
          gallery:
            this.state.page === 1
              ? [...res.hits]
              : [...prevState.gallery, ...res.hits],

          total: res.total,
        }));
        this.scroll();
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ showLoader: false }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  onHandleSearchbarSubmit = (searchedText) => {
    this.setState({ searchedText, page: 1 });
  };

  onPictureClick = (largeImg) => {
    this.setState({ largeImageURL: largeImg });
    this.toggleModal();
  };

  showBtnLoadMore = () => {
    return Math.ceil(this.state.total / 12) !== this.state.page - 1;
  };

  handlePageIncr = () => {
    this.setState({ page: this.state.page + 1 });
  };

  render() {
    return (
      <div className={styles.App}>
        <Searchbar onSubmit={this.onHandleSearchbarSubmit} />
        {this.state.gallery.length > 0 && (
          <ImageGallery
            onPictureClick={this.onPictureClick}
            searchedText={this.state.searchedText}
            gallery={this.state.gallery}
          />
        )}
        {this.state.showLoader && (
          <Loader
            type="ThreeDots"
            color="#6f03fc"
            height={80}
            width={80}
            className={styles.loader}
          />
        )}

        {this.state.gallery.length > 0 &&
          !this.state.showLoader &&
          this.showBtnLoadMore && (
            <Button galleryAppear={this.handlePageIncr} />
          )}

        {this.state.showModal && (
          <Modal closeModal={this.toggleModal}>
            <img src={this.state.largeImageURL} alt="#" />
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
