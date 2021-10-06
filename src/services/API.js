// https://pixabay.com/api/?q=что_искать
// & page=номер_страницы
//  & key=твой_ключ
//  & image_type=photo
//  & orientation=horizontal
//  & per_page=12
//  const url = https://pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12

import axios from "axios";
const BASE_URL = "https://pixabay.com/api/";

const KEY = "23308675-3bdf2416796cf281a4ef874ab";

const fetchApi = (searchedText, page) => {
  return axios
    .get(
      `${BASE_URL}?q=${searchedText}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
    .then((res) => res.data);
};

export default fetchApi;
