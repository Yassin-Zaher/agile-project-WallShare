import axios from "axios";
import { useContext } from "react";
import { ImageContext } from "../context/image-context";

export const fetchImagesFromUrl = (API_KEY) => {
  const imagesData = [];
  axios
    .get(
      `https://api.unsplash.com/photos?page=${
        Math.floor(Math.random() * 10) + 1
      }&client_id=${API_KEY}`
    )
    .then((res) => {
      imagesData.concat(res.data);
    })
    .catch((err) => console.error(err));

  return imagesData;
};
