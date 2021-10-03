import React, { Component } from "react";
import Button from "./button/Button";
import ImageGallery from "./imageGallery/ImageGallery";
import Searchbar from "./searchbar/Searchbar";
import axios from "axios";
import Modal from "./modal/Modal";
import styles from "./App.module.css";
import Loader from "react-loader-spinner";

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
      this.galleryAppear();
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  galleryAppear = () => {
    this.setState({ showLoader: true });
    this.fetchApi()
      .then((res) => {
        this.setState((prevState) => ({
          gallery: [...prevState.gallery, ...res.hits],
          page: prevState.page + 1,
          total: res.total,
        }));
        this.scroll();
      })
      .catch((error) => this.setState({ error }))
      .finally(() => this.setState({ showLoader: false }));
  };

  scroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  fetchApi = () => {
    const BASE_URL = "https://pixabay.com/api/";
    const APIKEY = "23308675-3bdf2416796cf281a4ef874ab";
    return axios
      .get(
        `${BASE_URL}?q=${this.state.searchedText}&page=${this.state.page}&key=${APIKEY}&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then((res) => res.data);
  };

  onHandleSearchbarSubmit = (searchedText) => {
    this.setState({ searchedText });
  };

  onPictureClick = (largeImg) => {
    this.setState({ largeImageURL: largeImg });
    this.toggleModal();
  };

  showBtnLoadMore = () => {
    return Math.ceil(this.state.total / 12) !== this.state.page - 1;
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

        {this.state.gallery.length > 0 && (
          <Button galleryAppear={this.galleryAppear} />
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
//
